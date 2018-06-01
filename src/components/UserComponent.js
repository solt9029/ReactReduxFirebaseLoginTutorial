import React from 'react';
export default class UserComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>UserComponentコンポーネント</h2>
        <p>test!</p>
        <button onClick={() => this.props.login()}>login</button>
        {
          this.props.user ? this.props.user.displayName : 'Please login'
        }
      </div>
    )
  }
}