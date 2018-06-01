import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import TopContainer from './containers/TopContainer';
import PrivateRoute from './containers/PrivateRoute';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">トップページ</Link></li>
          <li><Link to="/home">ユーザ専用ページ</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={TopContainer} />
          <PrivateRoute exact path="/home" component={UserContainer} />
          {/* <Route exact path="/home" render={() => <Redirect to="/" />} /> */}
        </Switch>
      </div>
    );
  }
}
