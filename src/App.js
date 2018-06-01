import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import UserOnly from './containers/UserOnly';
import Top from './containers/Top';
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
          <Route exact path="/" component={Top} />
          <PrivateRoute exact path="/home" component={UserOnly} />
          {/* <Route exact path="/home" render={() => <Redirect to="/" />} /> */}
        </Switch>
      </div>
    );
  }
}
