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
              <div className="container">
                <div>
                  <img src="https://cdn0.iconfinder.com/data/icons/household-appliances-icons-set-cartoon-style/512/a672-512.png"/>
                </div>
                <div>
                  <Link to="/home">
                    <button color={'blue'} content={'Home'} size={'huge'}/>
                  </Link>
                </div>
                <div>
                  <Link to="/search">
                    <button color={'blue'} content={'Recipe'} size={'huge'}/>
                  </Link>
                </div>
                <div>
                  <button content={localStorage.getItem('name')} color={'blue'} size={'huge'} />
                  <button as='a' color={'blue'} content={'Logout'} size={'huge'}
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.actions.logoutUser();
                    }} />
                </div>
              </div>
            <Route exact path="/home" render={() => {return <Home />}}/>
            <Route path="/search" render={() => {return <Search />}}/>
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