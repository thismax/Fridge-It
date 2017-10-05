import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FixedMenu from './fixedMenu.jsx';
import * as authActions from '../../actions/authActions.js';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <FixedMenu />
          <div
            id='landingPage'
            style={{ minHeight: 700, padding: '1em 0em' }}
          >
            <div className="container" >
              <style>{
                `#landingPage {
                  margin-top: 40px;
                  background-image: url('https://greatist.com/sites/default/files/fridge-of-food.jpg');
                  background-size:contain;
                  background-position:center;
                  background-repeat: no-repeat;
                  background-color: white;
                }
              `}</style>
              <h1

                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em', color: 'white' }}
              >Fridge-it</h1>
              <h2
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              ></h2>
              <button className="btn btn-success" onClick={(e) => {
                e.preventDefault();
                this.props.actions.checkItOut();
              }}>
                Get Started
              </button>
            </div>
          </div>
        <div style={{ padding: '8em 0em' }} >
          <div className="container">
            <div className="row">
              <div className="col col-sm-3">
                <h3 style={{ fontSize: '2em' }}>Plan meals with items already in your fridge</h3>
                <p style={{ fontSize: '1.33em' }}>
                  Fridge-It allows you to see the contents of your refrigerator no matter where you are. No more getting to the grocery store and forgetting what you already have. Plan meals, bookmark recipes, and eliminate food waste.  
                </p>
                <h3 style={{ fontSize: '2em' }}>Share a fridge with family and friends</h3>
                <p style={{ fontSize: '1.33em' }}>
                  Fridge-It makes sharing refrigerators a breeze. Stick magnets on your fridge to send others notes, requests, and reminders, and to make sure no one eats the leftover pizza you've been thinking about all day. 
                </p>
              </div>
              <div className="col col-sm-3">
                <img  src='https://i.pinimg.com/564x/fe/7a/14/fe7a147b77ba7e2960d6708e9178b8e5.jpg'
                />
              </div>
            </div>
            <div className="row">
              <div className="row">
                <button onClick={(e) => {
                  e.preventDefault();
                  this.props.actions.checkItOut();
                }}>Check It Out</button>
              </div>
            </div>
          </div>
        <div style={{ padding: '0em' }}>
          <div>
            <div className="row">
              <div className="col col-sm-3" style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <h3 style={{ fontSize: '2em' }}>"What a company"</h3>
                <p style={{ fontSize: '1.33em' }}>The members of Team TADA are brilliant! <br/> I never knew I needed Fridge-It until I started using it!</p>
              </div>
              <div className="col col-sm-3" style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <h3 style={{ fontSize: '2em' }}>"I'll never not use Fridge-It ever again!"</h3>
                <p style={{ fontSize: '1.33em' }}>
                  <img src='https://www.allbusiness.com/asset/2015/09/satisfied-customer.jpg'/>
                  <b>Nan</b> - very satisfied customer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '8em 0em' }}>
          <div className="container">
            <h3 style={{ fontSize: '2em' }}>More about Team TADA</h3>
            <p style={{ fontSize: '1.33em' }}>
              Team TADA was formed on September 22, 2017 and were inspired to make Fridge-It by Hack Reactor's fridge. 
              They realized that the idea of keeping track of food was important for all students, thus
              Fridge-It was born! 
            </p>
            <button>Read More</button>
            <h4
              className='header'
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='https://github.com/TEAM-TADA'>Members</a>
            </h4>
            <h3 style={{ fontSize: '2em' }}>Members</h3>
            <p style={{ fontSize: '1.33em' }}>
              TADA is an acronym of the creators of this group: Tiffany Phan, Angie Tang, Daniel Chong and Aaron Liss.
              <br/>The project owner of this app is Tiffany Phan.
              <br/>The scrum master of this app is Daniel Chong. 
            </p>
            <button>I'm Still Quite Interested</button>
          </div>
        </div>
        <div className="container" style={{ padding: '5em 0em' }}>
          <div className="row">
            <div className="col col-sm-3">
              <div className="row">
                <div className="col col-sm-3">
                  <h4>About</h4>
                  <ul>
                    <li>Sitemap</li>
                    <li>Contact Us</li>
                    <li>Religious Ceremonies</li>
                    <li>Gazebo Plans</li>
                  </ul>
                  </div>
                  <div className="col col-sm-3">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

const lpDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, lpDispatch)(LandingPage);