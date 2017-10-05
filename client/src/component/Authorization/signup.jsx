import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, form, Grid, Header, Message, Segment } from 'semantic-ui-react';

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
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <div className="col col-sm-3" style={{ maxWidth: 500 }}>
            <h2 color='teal' textAlign='center'>
              {' '}Sign Up
            </h2>
            <form size='large'>
              <div>
                <input
                  id="inputSignupEmail"
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <input
                  id="inputSignupPw"
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <button color='teal' fluid size='large'
                  onClick={(e) => {
                    e.preventDefault();
                    this.emailSignUp();
                  }}>Sign Up</button>
              </div>

                <button color='facebook' fluid size='large'
                onClick={() => this.props.actions.googleLogin()}>Sign Up with Google</button>
            </form>
            <p>
              Already have an account? <a href='/login'> Log In</a>
            </p>
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