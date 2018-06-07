import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

const UserOnlyRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user.uid ? <Component {...props} /> : <Redirect to="/" />
    )} />
  );
};

export default UserOnlyRoute;