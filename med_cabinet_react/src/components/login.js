import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useRouteMatch } from "react-router-dom";
import Form from "../styles/forms";
import FormWrapper from "../styles/formwrapper"
import Header from '../styles/headers'

const initialState = {
  username: "",
  password: "",
  isFetching: false
};
const initialErrors = {
  username: "",
  password: "",
}

const Login = props => {
  const focusHandler = event => {

    event.target.style.boxShadow = '5px 5px 5px grey'
  }
  const focusOutHandler = event => {
    event.target.style.boxShadow = 'none'
  }

  const [loginData, setLoginData] = useState(initialState);

  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoginData({ ...loginData, isFetching: true });
    axiosWithAuth()
      .post("/auth/login", { username: loginData.username, password: loginData.password })
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/userDashboard")
      })
      .catch(err => { console.log(err, "Oof...sorry, an error occured") })
  }

  return (
    <div>
      <Header>
        <div className='header-wrapper'>
          <h1>Open Your Medicine Cabinet</h1>
          <img
            className="logo"
            src="..."
            // ADD THE LOGO HERE
            alt="logo image"
          />
        </div>
        <h3>Login</h3>
      </Header>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <input
            className='login'
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
          <input
          // nz: seems like the className here should not be "login"
            className='login'
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
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </FormWrapper>

    </div>
  );
};

export default Login;
