import React from 'react';

export default class UserOnly extends React.Component {
  render() {
    return (
      <div>
        <h2>UserOnly</h2>
        { this.props.user.displayName }
        <button onClick={() => this.props.logout()}>logout</button>
      </div>
    )
  }
}