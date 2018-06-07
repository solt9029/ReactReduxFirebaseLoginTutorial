import React from 'react';

export default class GuestOnly extends React.Component {
  render() {
    return (
      <div>
        <h2>GuestOnly</h2>
        <button onClick={() => this.props.login()}>login</button>
      </div>
    )
  }
}