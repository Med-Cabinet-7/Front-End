import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/signup'
import axios from 'axios'
import SignUp from './components/signup'
import Login from './components/login'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  isFetching: false,
  email: "",
  height: "",
  weight: "",
  name: ""
};

const [userInfo, setUserInfo] = useState(initialState)

function App() {

  // HANDLE EVENTS ---------------------------------------------------------
  const handleChange = event => {
      setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };//end of change handler

  const handleSubmit = event => {
    event.preventDefault();
    
    setUserInfo({ ...userInfo, isFetching: true });
    axiosWithAuth()
      .post("/auth/login", userInfo)
      .then(res => {
        localStorage.setItem("token", res.data.message);
        props.history.push("");  
        // /ADD PAGE TO WHERE INFO WILL BE PUSHED/
              })
      .catch(err => {
        console.log(err, "sorry, an error has occured while loggin you in");
      });

  };//end of submit handler

  //RETURN APP ----------------------------------------------------------------

  return (
    <div className="App">
     <SignUp onSubmit={handleSubmit} handleChange={handleChange}/>
     <Login onSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
}

export default App;
