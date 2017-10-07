import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import Search from '../Search/searchView.jsx';
import Home from '../Home/home.jsx';
import * as authActions from '../../actions/authActions.js';

class HomeView extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    if(localStorage.getItem('userid')) {
      return (
        <div>

          <Router history={this.props.history}>
              <div>
                <nav className="navbar navbar-expand-lg navbar-light">   
                  <a className="navbar-brand" href="#"><img src="https://cdn0.iconfinder.com/data/icons/household-appliances-icons-set-cartoon-style/512/a672-512.png"  width="30" height="30" alt="" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Fridge-It</Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/home" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/search" className="nav-link">Recipe</Link>
                      </li>
                      <li>
                      {localStorage.getItem('name')}
                        </li>
                        <li>
                        <button className="btn btn-success" onClick={(e) => {
                    e.preventDefault();
                    this.props.actions.logoutUser();
                    }}>Log Out</button>
                          </li>
                    </ul>
                  </div>
                </nav>

                <Route exact path="/home" render={() => {return <Home/>}} />
                <Route path="/search" render={() => {return <Search/>}} />

                </div> 
              </Router>
       </div>
      );
    } else {
      return (
        <div>
        <Redirect exact to={{ pathname: '/login'}} />
        </div>
      )
    }
  }
};

const homeState = (store) => {
  return {
    username: store.auth.username,
  }
};

const homeDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(homeState, homeDispatch)(HomeView);