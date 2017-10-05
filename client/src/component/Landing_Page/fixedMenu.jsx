import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Link, Redirect } from 'react-router-dom';

import HomeView from '../Home/homeView.jsx';
import Login from '../Authorization/login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from '../Authorization/signup.jsx';
import * as authActions from '../../actions/authActions.js';

const FixedMenu = ({ history }) => (
  <Router history={history}>
    <div>
      <div>
        <div className="nav navbar">
          <div className="container">
          <style>{
            `#navbar {
              background-color: #2185d0;
            }
          `}</style>
            <div>
              <img src="https://cdn0.iconfinder.com/data/icons/household-appliances-icons-set-cartoon-style/512/a672-512.png"/>
            </div>
            <div>
              <Link to="/">
                <button />
              </Link>
            </div>
            <div>
              <div>
                <Link to="/login">
                  <button />
                </Link>
              </div>
              <div>
                <Link to="/signup">
                  <button />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Route exact path="/" render={() => (<LandingPage />)} />
        <Route path="/login" render={() => (<Login />)} />
        <Route path="/signup" render={() => (<SignUp />)} />
      </div>
    </div>
  </Router>
)

export default FixedMenu;