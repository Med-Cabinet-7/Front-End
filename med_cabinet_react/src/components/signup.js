import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useRouteMatch } from "react-router-dom";
import Form from '../styles/forms'
import FormWrapper from '../styles/formwrapper'
import Header from '../styles/headers'
import Par from '../styles/yupstyle'
import * as yup from 'yup'
import { ROUTE_NAMES } from '../utils/route_consts';

const SignUp = props => {
  const signupSchema =
    yup.object().shape({
      username: yup.string()
        .min(4, 'Your username must be more than 3 characters')
        .required('A username is required'),
      password: yup.string()
        .min(8, 'Your password must be at least 8 characters')
        .required('You must create a password'),
    })

  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    // id: ''
  });
  const initialErrors = {
    username: "",
    password: "",
  }

  const [errors, setErrors] = useState(initialErrors)

  const handleChange = event => {
    const name=event.target.name
    const value = event.target.value



    yup.reach(signupSchema, name)
    .validate(value)
    .then(valid=>{
        setErrors({...errors, [name]:''})
      })
    .catch(err=>{
        setErrors({...errors, [name]: err.errors[0]})
      })

      setSignUpInfo({ ...signUpInfo, [name]: value });
  };
// .post("/:id/myinfo", signUpInfo)
      // .post("auth/register", {username:signUpInfo.username, password:signUpInfo.password})
  const handleSubmit = event => {
    event.preventDefault();
    setSignUpInfo({ ...signUpInfo });
    console.log(signUpInfo)
    axiosWithAuth()
      .post("auth/register", signUpInfo)

      .then(res => {
        console.log("in Axios", res);
        console.log(props);
        // setSignUpInfo({...signUpInfo, [signUpInfo.id]: res.savedUser.id})
        props.history.push("/");
        // props.history.push(ROUTE_NAMES.login)
      })

      .catch(err =>
        console.log(err, "sorry, an error has occured while signing you up")
      );
  };

  const focusHandler = event => {

    event.target.style.boxShadow = '5px 5px 5px grey'
  }
  const focusOutHandler = event => {
    event.target.style.boxShadow = 'none'
  }

  return (
    <div>
      <Header>
        <div className='header-wrapper'>
          <h1>Open Your Medicine Cabinet</h1>
          <img
            className="logo"
            src="../img/android-chrome-192x192.png"
            // ADD THE LOGO HERE
            alt="logo image"
          />
        </div>
        <h3>Sign Up!</h3>
      </Header>
      <FormWrapper className='signup-wrapper'>
        <Form className='signup-form'>
          <Par>{errors.username}</Par>
          <input
            label='Username'
            className='signup'
            type='text'
            placeholder='Username'
            name='username'
            onFocus={focusHandler}
            onBlur={focusOutHandler}
            onChange={handleChange}
            value={signUpInfo.username}
          />
          <Par>{errors.password}</Par>
          <input
            label='Password'
            className='signup'
            type='password'
            placeholder='Password'
            name='password'
            onFocus={focusHandler}
            onBlur={focusOutHandler}
            onChange={handleChange}
            value={signUpInfo.password}
          />
          <br />
          <button className='submit' onClick={handleSubmit}>Create Account</button>
        </Form>

            Already have an account? <Link to={ROUTE_NAMES.login}>Log In</Link>
      </FormWrapper>
    </div>
  )
}

export default SignUp
