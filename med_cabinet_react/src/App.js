import React from 'react';
import './App.css';
import './components/signup';
import SignUp from './components/signup';
import Login from './components/login';
import UserInfo from './components/userDashboard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import { ROUTE_NAMES } from './utils/route_consts';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path={ROUTE_NAMES.userDash}
            component={<UserInfo />}
          />
          {/* <Route path='/foo'>
            <UserInfo />
          </Route> */}
          <Route path={ROUTE_NAMES.signup}>
            <SignUp />
          </Route>
          <Route path={ROUTE_NAMES.login}>
            <Login />
          </Route>
        </Switch>
      </Router>
      <nav>
        <a href={ROUTE_NAMES.home}>Home </a>
        <a href='#'>|</a>
        <a href={ROUTE_NAMES.about}> About</a>
        <a href='#'>|</a>
        <a href='#'>Contact</a>
        <a href='#'>|</a>
        <a href={ROUTE_NAMES.login}>Login</a>
      </nav>
    </div>
  );
}

export default App;
