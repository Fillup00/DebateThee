/* https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/ */
//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount(){
    firebase.auth.onAuthStateChanged(authUser =>{
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null}));
    });
  }

  render(){
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr/>
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </Router>
    );
  }
}

export default App;



/*
 BELOW IS FROM FIREBASE YOUTUBE CHANNEL TO GET DATA
  componentDidMount(){  //life cycle method of the compenent called once when rendered to dom
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap =>{
      this.setState({
        speed: snap.val()
      })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
*/
