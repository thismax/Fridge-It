import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, Route, Link, Redirect, NavLink } from 'react-router-dom';

import HomeView from '../Home/homeView.jsx';
import Login from '../Authorization/login.jsx';
import LandingPage from './landingPage.jsx';
import SignUp from '../Authorization/signup.jsx';
import * as authActions from '../../actions/authActions.js';

const FixedMenu = ({ history }) => (
  <Router history={history}>
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">   
        <a className="navbar-brand" href="#"><img src="https://cdn0.iconfinder.com/data/icons/household-appliances-icons-set-cartoon-style/512/a672-512.png"  width="30" height="30" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link">Log In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Route exact path="/" render={() => (<LandingPage />)} />
        <Route path="/login" render={() => (<Login />)} />
        <Route path="/signup" render={() => (<SignUp />)} />
      </div>
      
    </div>
  </Router>
)

export default FixedMenu;