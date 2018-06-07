import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

const SwitchRoute = ({ userComponent: UserComponent, guestComponent: GuestComponent, user, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      user.uid ? <UserComponent {...props} /> : <GuestComponent {...props} />
    )} />
  );
};

export default SwitchRoute;