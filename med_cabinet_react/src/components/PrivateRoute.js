import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTE_NAMES } from '../utils/route_consts';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (localStorage.getItem("token")){
                return <Component {...props} />
            } else {
                return <Redirect to={ROUTE_NAMES.login} />;
            }
        }}
        />
    )
}
export default PrivateRoute;
