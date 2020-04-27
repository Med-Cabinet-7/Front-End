import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";



const Login = ({props}) => {
const {
    handleChange,
    handleSubmit
} = props

// const [login, setLogin] = useState(initialState);

//   const handleChange = e => {
//     // name points to "name" in your form
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     setLogin({ ...login, isFetching: true });
//     axiosWithAuth()
//       .post("/auth/login", login)
//       .then(res => {
//         localStorage.setItem("token", res.data.message);
//         props.history.push("/...");
//         // LINK TO WHERE DATA GOES
//       })
//       .catch(err => {
//         console.log(err, "sorry, an error has occured while loggin you in");
//       });
//   };

  return (
    <div>
      <h1>Open Your Medicine Cabinet</h1>
      <img
        className="logo"
        src="..."
        // ADD THE LOGO HERE
        alt="logo image"
      />
      <h3>Login</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className='login'
            label="Username"
            type="text"
            name="username"
            placeholder="username"
            value={login.username}
            onChange={handleChange}
          />
          <br />
          <input
            className='login'
            label="Password"
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button>Log In</button>
          {login.isFetching && "Please wait...logging you in"}
        </form>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
