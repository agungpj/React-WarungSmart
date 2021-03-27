import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  // component : props seluruh component private.

  const user = false;
  //kondisi jika user terautentikasi, maka return component private jika tidak redirect ke login.

  return (
    <Route
      {...restProps}
      render={(props) => {
        return user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
