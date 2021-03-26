import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  console.log(Component);
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;

//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
