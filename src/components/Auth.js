import React from 'react';
import { Redirect } from 'react-router-dom';

const Auth = (props) => (props.user.uid ? props.children : <Redirect to={'/'}/>);

export default Auth;