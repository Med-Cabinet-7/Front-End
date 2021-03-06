import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getLoginToken } from "../utils/login";
import { useRouteMatch } from "react-router-dom";
import Form from "../styles/forms";
import FormWrapper from "../styles/formwrapper"
import Header from '../styles/headers'
import { ROUTE_NAMES } from '../utils/route_consts';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import SavedStrains from './saves'
import * as yup from 'yup'
import Par from '../styles/yupstyle'

const initialState = {
  username: "",
  password: "",
  isFetching: false
};
const initialErrors = {
  username: "",
  password: ""
}


const Login = props => {

  const loginSchema = yup.object().shape({
    username: yup.string()
    .required('You must input yout username correctly'),
    password: yup.string()
    .required('You must input your password correctly')
  })

  const [errors, setErrors] = useState(initialErrors)

  const focusHandler = event => {

    event.target.style.boxShadow = '5px 5px 5px grey'
  }
  const focusOutHandler = event => {
    event.target.style.boxShadow = 'none'
  }

  const [loginData, setLoginData] = useState(initialState);

  const handleChange = e => {

    const value= e.target.value
    const name = e.target.name

    yup.reach(loginSchema, name)
    .validate(value)
    .then(valid=>{
        setErrors({...errors, [name]:''})
      })
    .catch(err=>{
        setErrors({...errors, [name]: err.errors[0]})
      })

      setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoginData({ ...loginData, isFetching: true });

    try {
      const token = await getLoginToken(loginData.username, loginData.password);
      localStorage.setItem('token', token);
      setLoginData({ ...loginData, isFetching: false });
      props.history.push(ROUTE_NAMES.userDash);
    } catch (err) {
      console.log(err, "Oof...sorry, an error occured");
    }
  }

  return (
    <div>
      <Header>
        <div className='header-wrapper'>
          <h1>Open Your Medicine Cabinet</h1>
          {/* <img
            className="logo"
            src="../img/android-chrome-192x192.png"
            alt="logo image"
          /> */}
        </div>
        <h3>Login</h3>
      </Header>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Par>{errors.username}</Par>
          <input
            label="Username"
            type="text"
            name="username"
            placeholder="username"
            value={loginData.username}
            onChange={handleChange}
            onFocus={focusHandler}
            onBlur={focusOutHandler}
          />
          <br />
          <Par>{errors.password}</Par>
          <input
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            value={loginData.password}
            onChange={handleChange}
            onFocus={focusHandler}
            onBlur={focusOutHandler}
          />
          <br />
          <br />
          <button>Log In</button>
          {loginData.isFetching && "Please wait...logging you in"}
        </Form>
        Don't have an account? <Link to={ROUTE_NAMES.signup}>Sign Up</Link>
      </FormWrapper>

    </div>
  );
};

export default Login;
