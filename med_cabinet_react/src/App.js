import React from 'react';
import './App.css';
import './components/signup';
import SignUp from './components/signup';
import Login from './components/login';
import UserInfo from './components/userDashboard';
import WeedCard from './components/recCard'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

const url = 'http://localhost:3000/'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path='/dashboard'>
            <UserInfo />
          </PrivateRoute>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
      <nav>
        <a href='#'>Home </a>
        <a href='#'>|</a>
        <a href='#'> About</a>
        <a href='#'>|</a>
        <a href='#'>Contact</a>
        <a href='#'>|</a>
        <a href='#'>Login</a>
      </nav>
    </div>
  );
}

export default App;
