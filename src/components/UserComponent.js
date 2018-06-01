import React from 'react';
import { Redirect } from 'react-router-dom';

export default class UserComponent extends React.Component {
  render() {
    // if (!this.props.user) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div>
        <h2>UserComponent</h2>
        {
          this.props.user ? this.props.user.displayName : 'Please login'
        }
      </div>
    )
  }
}