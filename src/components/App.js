import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import UserOnly from '../containers/UserOnly';
import GuestOnly from '../containers/GuestOnly';
import SwitchRoute from '../containers/SwitchRoute';

export default class App extends Component {
  componentDidMount() {
    this.props.onAuthStateChanged();
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <SwitchRoute exact path="/" userComponent={UserOnly} guestComponent={GuestOnly} />
        </Switch>
      </div>
    );
  }
}