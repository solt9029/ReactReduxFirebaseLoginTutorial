import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import UserOnly from '../containers/UserOnly';
import Top from '../containers/Top';
import UserOnlyRoute from '../containers/UserOnlyRoute';
import GuestOnlyRoute from '../containers/GuestOnlyRoute';

export default class App extends Component {
  componentDidMount() {
    this.props.onAuthStateChanged();
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">トップページ</Link></li>
          <li><Link to="/home">ユーザ専用ページ</Link></li>
        </ul>
        <Switch>
          <GuestOnlyRoute exact path="/" component={Top} />
          <UserOnlyRoute exact path="/home" component={UserOnly} />
        </Switch>
      </div>
    );
  }
}