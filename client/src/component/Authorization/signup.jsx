import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions.js';

class Signup extends Component {
  constructor (props) {
    super(props); 
  }

  // Takes the email and password from the input fields for firebase's sign up function.
  emailSignUp() {
    let email = document.getElementById('inputSignupEmail');
    let pw = document.getElementById('inputSignupPw');

    this.props.actions.emailSignUp(email.value, pw.value);
  };

  render() {
    return (

      <div>
      <div className="purple-background"></div>
      <div className='container'>
      <div className="row">
        <div className="col sign-in-box">
          <h2>
            {' '}Sign Up
          </h2>
          <form>
            <div className="form-group">
            <div className="inner-addon left-addon">
            <i className="fa fa-user" aria-hidden="true"></i>
              <input
                id="inputSignupEmail"
                className="form-control"
                placeholder='E-mail address'
              />
            </div>
            </div>
            <div className="form-group">
            <div className="inner-addon left-addon">
            <i className="fa fa-lock" aria-hidden="true"></i>
              <input
                className="form-control" 
                id="inputSignupPw"
                placeholder='Password'
                type='password'
              />
            </div>
              <button className="btn btn-success btn-lg btn-block login-button" 
              onClick={(e) => {
                e.preventDefault();
                this.emailSignUp();
              }}>Sign Up</button>
            </div>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.props.actions.googleLogin()}>Sign Up with Google</button>
          </form>
          <div className="card sign-up-box">
            <span>Already have an account?<a href='/login'>Log In</a></span>
          </div>
        </div>
      </div>
      </div>
      </div>

    )
  }
};

// Brings in functions from authActions nad binds them to this.props.
const signupDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

// Connects state and dispatch to this component.
export default connect(null, signupDispatch)(Signup);