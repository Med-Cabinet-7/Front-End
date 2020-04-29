import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useRouteMatch } from "react-router-dom";
import Form from '../styles/forms'
import FormWrapper from '../styles/formwrapper'
import Header from '../styles/headers'

const SignUp = props => {
  const [signUpInfo, setSignUpInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    age: "",
    weight: "",
    height: ""
  });

  const handleChange = event => {
    setSignUpInfo({ ...signUpInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSignUpInfo({ ...signUpInfo });
    axiosWithAuth()
      .post("auth/register", signUpInfo)
      .then(res => {
        // nz: it would be cool if the act of signing up automatically logged them in.
        // then this could just push them to the user dashboard instead of the login page.
        // That's riding on the idea though that the sign up API route returns the token in its payload.
        // localStorage.setItem("token", res.data.payload)
        // props.history.push("/userDashboard")
        props.history.push("/login")
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
            src="..."
            // ADD THE LOGO HERE
            alt="logo image"
          />
        </div>
        <h3>Sign Up!</h3>
      </Header>
      <FormWrapper className='signup-wrapper'>
        <Form className='signup-form'>
          <input
            label='Username'
            className='signup'
            type='text'
            placeholder='Username'
            name='username'
            onFocus={focusHandler}
            onBlur={focusOutHandler}
            onChange={handleChange}
          />
          <input
            label='Email'
            className='signup'
            type='text'
            placeholder='Email'
            name='email'
            onFocus={focusHandler}
            onBlur={focusOutHandler}
            onChange={handleChange}
          />
          <input
            label='Password'
            className='signup'
            type='password'
            placeholder='Password'
            name='password'
            onFocus={focusHandler}
            onBlur={focusOutHandler}
            onChange={handleChange}
          />
          <br />
          {/* <input
                    className='userInfo'
                    name='firstname'
                    type='text'
                    label='firstname'
                    placeholder='first name'
                    onFocus={focusHandler}
                    onBlur={focusOutHandler}
                    />               
                <input
                    className='userInfo'
                    name='lastname'
                    type='text'
                    label='lastname'
                    placeholder='last name'
                    onFocus={focusHandler}
                    onBlur={focusOutHandler}
                    onChange={handleChange}
                   />         
                <input
                    className='userInfo'
                    name='age'
                    type='text'
                    label='age'
                    placeholder='age'
                    onFocus={focusHandler}
                    onBlur={focusOutHandler}
                    onChange={handleChange}
                    />
                <input
                    className='userInfo'
                    name='weight'
                    type='text'
                    label='weight'
                    placeholder='weight'
                    onFocus={focusHandler}
                    onBlur={focusOutHandler}
                    onChange={handleChange}
                    />
                <input
                    className='userInfo'
                    name='height'
                    type='text'
                    label='height'
                    placeholder='height'
                    onFocus={focusHandler}
                    onBlur={focusOutHandler}
                    onChange={handleChange}
                    /> */}
          <button className='submit' onClick={handleSubmit}>Create Account</button>
        </Form>

            Already have an account? <Link to="/">Log In</Link>
      </FormWrapper>
    </div>
  )
}

export default SignUp