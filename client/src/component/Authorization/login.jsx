import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import * as authActions from '../../actions/authActions.js'

class Login extends Component {
  constructor (props) {
    super(props);
  }
  
  // Takes the email and password from the input fields for firebase's log in function.
  emailSignin() {
    let user = document.getElementById('inputNM');
    let pw = document.getElementById('inputPW');
     
    this.props.actions.emailLogin(user.value, pw.value);
  };
    
  render() {
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
            padding-top: 8%;
            background-color: #e6e6ff;
          }
        `}</style>
        <div className="row"
          style={{ height: '100%' }}>
          
          <div className="col col-sm-3" style={{ maxWidth: 500 }}>
            <h2 color='teal' textAlign='center'>
              {' '}Log into your account
            </h2>
            <form>
              <div>
                <input
                  id="inputNM"
                  placeholder='E-mail address'
                />
                <input
                  id="inputPW"
                  placeholder='Password'
                  type='password'
                />
                <button color='teal' fluid size='large'
                  onClick={(e) => {
                    e.preventDefault();
                    this.emailSignin();
                  }}>Login</button>
              </div>
              
                <button color='facebook' fluid size='large'
                onClick={() => this.props.actions.googleLogin()}>Log In with Google</button>
            </form>
            <p>
              Don't have an account yet? <a href='/signup'> Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
};

// Brings in functions from authActions nad binds them to this.props.
const loginDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

// Connects state and dispatch to this component.
export default connect(null, loginDispatch)(Login);