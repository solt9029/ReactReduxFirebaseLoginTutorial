import React from 'react';

export default class TopComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>TopComponent</h2>
        <button onClick={() => this.props.login()}>login</button>
      </div>
    )
  }
}