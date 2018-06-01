import React from 'react';
import { Redirect } from 'react-router-dom';

export default class UserOnly extends React.Component {
  render() {
    return (
      <div>
        <h2>UserOnly</h2>
        { this.props.displayName }
      </div>
    )
  }
}