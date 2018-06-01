import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, uid, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      uid ? <Component {...props} /> : <Redirect to="/" />
    )} />
  );
};

export default PrivateRoute;