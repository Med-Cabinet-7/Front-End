import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useRouteMatch } from "react-router-dom";


function SignUp ({props}){
let match = useRouteMatch('/signup')
const {
    handleChange,
    handleSubmit
} = props
// const SignUp = props => {
//   const [signUpInfo, setSignUpInfo] = useState({
//     name: "",
//     email: "",
//     username: "",
//     password: ""
//   });
//     const handleChange = e => {
//     setSignUpInfo({ ...signUpInfo, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = e => {
//     event.preventDefault();
//     setSignUpInfo({ ...signUpInfo });
//     axiosWithAuth()
//       .post("/auth/register", signUpInfo)
//       .then(res => {
//         props.history.push("/"); // coming from a history stack where you can "push" into a different route
//       })
//       .catch(err =>
//         console.log(err, "sorry, an error has occured while signing you up")
//       );
//   };
//     }

    return(
        <div className='signup-wrapper'>
            <form className='signup-form'>
                <input 
                    label='Username'
                    className='signup'
                    type='text' 
                    placeholder='Username' 
                    name='username' 
                    onChange={handleChange}/>
                <br/>
                <input
                    label='Username'
                    className='signup'
                    type='text' 
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}/>
                <br/>
                <input
                    label='Username'
                    className='signup'
                    type='text'
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}/>
                <br/>
                <br/>
                <button className='submit'>Submit</button>
                <br/>
                <Link to='/signup/userinfo'><button className='submit'>Create Account</button></Link>
            </form>
        </div>
    )
}

export default SignUp