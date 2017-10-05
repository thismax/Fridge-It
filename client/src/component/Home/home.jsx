import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, div, Button } from 'semantic-ui-react';

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
      <div divided="vertically" stackable>
        <div class="row" columns={2} centered>
          <div class="col col-sm-3" width={11}> 
            <div class="row">
              <Fridge />
            </div>
            <br/>
            <div class="row" textAlign={'center'}>
              <Search />
            </div>
          </div>
          <div class="col col-sm-3" width={5}>
            <Messages />
          </div>
        </div>
      </div>
      )
    } else {
      let username = localStorage.getItem('name');

      return (
        <div centered columns={2}>
          <div class="col col-sm-3" width={4}>
            <button content={'Create a Fridge'} color={'blue'}
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
            />
          </div>
          <div class="col col-sm-3" width={6}>
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
