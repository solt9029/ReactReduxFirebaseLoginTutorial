import React from 'react';

export default class UserOnly extends React.Component {
  componentDidMount() {
    this.props.onValue(this.props.user.uid);
  }
  render() {
    return (
      <div>
        <h2>UserOnly</h2>
        { this.props.user.displayName }
        <button onClick={() => this.props.logout()}>logout</button>
        {this.props.item.list.map((item) => {
          return <div>{item.content}</div>;
        })}
      </div>
    )
  }
}