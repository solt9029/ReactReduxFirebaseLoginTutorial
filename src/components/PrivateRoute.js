import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user ? <Component {...props} /> : <Redirect to="/" />
    )} />
  );
};

export default PrivateRoute;  