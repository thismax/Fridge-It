import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, Redirect, NavLink } from 'react-router-dom';


import FixedMenu from './fixedMenu.jsx';
import * as authActions from '../../actions/authActions.js';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://i.imgur.com/xBWTmBD.jpg" alt="Fridge-it" />
              <div className="carousel-caption d-md-block">
                <h1>Fridge-it</h1>
                <h2>Meal planning made convenient and easy.</h2>
                <button type="button" className="btn btn-primary btn-lg" onClick={(e) => {
                e.preventDefault();
                this.props.actions.checkItOut();
              }}>
                <span>Get Started &nbsp;
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
                </button>
             </div>
            </div>
          </div>
        </div>
        <div className="container padding-30" >
          <div className="row">
            <div className="col-8 col-sm-6">
              <h3>Plan meals with items already in your fridge</h3>
              <p>
                Fridge-It allows you to see the contents of your refrigerator no matter where you are. No more getting to the grocery store and forgetting what you already have. Plan meals, bookmark recipes, and eliminate food waste.  
              </p>
              <h3>Share a fridge with family and friends</h3>
              <p>
                Fridge-It makes sharing refrigerators a breeze. Stick magnets on your fridge to send others notes, requests, and reminders, and to make sure no one eats the leftover pizza you've been thinking about all day. 
              </p>
              <button className="btn btn-secondary">Check it out</button>
              <div className="container padding-30">
                <div className="row">
                  <div className="col">
                    <h2>"What a company"</h2>
                    <h5>The members of Team TADA are brilliant!</h5>
                    <h5>I never knew I needed Fridge-It until I started using it!</h5>
                  </div>
                  <div className="col">
                  <h2>"I'll never not use Fridge-It ever again!"</h2>
                    <h5>Nan - very satisfied customer</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-6 mini-fridge-pic">
              <img src="https://i.pinimg.com/564x/fe/7a/14/fe7a147b77ba7e2960d6708e9178b8e5.jpg" />
            </div>
            <hr />
            <div className="padding-30">
              <h3>More about Team TADA</h3>
              <p> Team TADA was formed on September 22, 2017 and were inspired to make Fridge-It by Hack Reactor's fridge. They realized that the idea of keeping track of food was important for all students, thus Fridge-It was born! </p>
              <button className="btn btn-secondary">Read More</button>
          </div>
          <div className="padding-30">
              <h3>Members</h3>
              <p>TADA is an acronym of the creators of this group: Tiffany Phan, Angie Tang, Daniel Chong and Aaron Liss. The project owner of this app is Tiffany Phan. The scrum master of this app is Daniel Chong.</p>
              <button className="btn btn-secondary">I'm Still Quite Interested</button>
          </div>
        </div>

      </div>
      <footer className="footer">
        <div className="container">
        <div className="row">
          <div className="col">
            <h3>About</h3>

          </div>
          <div className="col">
          <h3>Services</h3>

          </div>
        </div>
          </div>
        </footer>
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