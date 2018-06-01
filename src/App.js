import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import UserComponent from './containers/UserComponent';
import TopComponent from './containers/TopComponent';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">トップページ</Link></li>
          <li><Link to="/home">ユーザ専用ページ</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={TopComponent} />
          <Route exact path="/home" component={UserComponent} />
          {/* <Route exact path="/home" render={() => <Redirect to="/" />} /> */}
        </Switch>
      </div>
    );
  }
}
