import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

const GuestOnlyRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user.uid ? <Redirect to="/home" /> : <Component {...props} />
    )} />
  );
};

export default GuestOnlyRoute;