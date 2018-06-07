import React from 'react';

export default class Top extends React.Component {
  componentDidMount() {
    this.props.onAuthStateChanged();
  }
  render() {
    return (
      <div>
        <h2>Top</h2>
        <button onClick={() => this.props.login()}>login</button>
      </div>
    )
  }
}