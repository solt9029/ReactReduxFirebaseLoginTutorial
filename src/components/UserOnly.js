import React from 'react';

export default class UserOnly extends React.Component {
  componentDidMount() {
    this.props.onValue();
  }
  render() {
    return (
      <div>
        <h2>UserOnly</h2>
        { this.props.user.displayName }
        <button onClick={() => this.props.logout()}>logout</button>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input type="text" onChange={event => this.props.handleChangeTitle(event.target.value)} value={this.props.item.title} />
          <input type="text" onChange={event => this.props.handleChangeContent(event.target.value)} value={this.props.item.content} />
          <button>submit</button>
        </form>
        <ul>
          {this.props.item.list.map((item) => {
            return <li>{item.title}:{item.content}</li>;
          })}
        </ul>
      </div>
    )
  }
}