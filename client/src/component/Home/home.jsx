import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Messages from '../Message/messagesListView.jsx';
import Search from '../Search/searchListView.jsx';
import Fridge from '../Fridge/fridgeView.jsx';
import * as fridgeActions from '../../actions/fridgeActions.js';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.getFridge(localStorage.getItem('name'));
  };

  render() {
    let { actions, fetched, posted } = this.props;
    if (fetched || posted) {
      return (
      <div>
            <div className="container">
              <div className="row">
              <div>
                <Fridge />
              </div>
            <div>
              {/* <Search /> */}
            </div>
          <div>
            {/* <Messages /> */}
          </div>
          </div>
          </div>
      </div>
      )
    } else {
      let username = localStorage.getItem('name');

      return (
        <div>
          <div className="col col-sm-3">
            <button 
              onClick={(e) => {
                e.preventDefault();
                
                const userArray = [];
                userArray.push(username);
                
                const fridgeObj = {
                  users: userArray,
                  name: username,
                  phone: '',
                  time: '',
                }
                actions.addFridge(fridgeObj);
              }}
            >Create a fridge</button>
          </div>
          <div className="col col-sm-3">
            <form>
                <input id="joinFridgeInput" placeholder="Enter Fridge Owner's Name" />
                <button
                onClick={(e) => {
                    e.preventDefault();
                    actions.getFridge(document.getElementById('joinFridgeInput').value);
                  }}
                > 'Join a Fridge'
                </button>
            </form>
          </div>
        </div>
      )
    }
  }
};

const homeState = (store) => {
  return {
    fetched: store.fridge.fetched,
    posted: store.fridge.posted,
  }
};

const homeDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fridgeActions, dispatch),
  }
};

export default connect(homeState, homeDispatch)(Home);
