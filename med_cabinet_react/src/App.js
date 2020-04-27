import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/signup';
import axios from 'axios';
import SignUp from './components/signup';
import Login from './components/login';
import UserInfo from './components/userInfo';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const url = 'http://localhost:3000/'

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

  const handleLogin = event => {
    event.preventDefault();
    
    setUserInfo({ ...userInfo, isFetching: true });
    axiosWithAuth()
      .post("/auth/login", userInfo)
      .then(res => {
        localStorage.setItem("token", res.data.message);
        props.history.push("https://med-cabinet-7.herokuapp.com/api/auth/login");  
        // /ADD PAGE TO WHERE INFO WILL BE PUSHED/
              })
      .catch(err => {
        console.log(err, "sorry, an error has occured while loggin you in");
      });

  };//end of login handler

  const handleSignup = event =>{
    event.preventDefault()
  }

  const handleRegister = event =>{
    event.preventDefault()

    
  }//end user info submit

  //RETURN APP ----------------------------------------------------------------

  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path='/signup/userinfo'>
     <UserInfo onsibmit={handleRegister} handleChange={handleChange} />
     </Route>
     <Route path='/signup'>
     <SignUp onSubmit={handleSignup} handleChange={handleChange}/>
     </Route>
     <Route path='/'>
     <Login onSubmit={handleLogin} handleChange={handleChange} />
     </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
