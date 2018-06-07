import React from 'react';
import { Redirect } from 'react-router-dom';

const Auth = (props) => (props.uid ? props.children : <Redirect to={'/'}/>);

export default Auth;