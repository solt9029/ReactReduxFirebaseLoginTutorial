import React from 'react';

export default class UserComponent extends React.Component {
  render() {
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