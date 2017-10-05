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
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://greatist.com/sites/default/files/fridge-of-food.jpg" alt="Fridge-it" />
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
        <div className="container" >
          <div className="row">
            <div className=".col-12 .col-md-8">
              <h3>Plan meals with items already in your fridge</h3>
              <p>
                Fridge-It allows you to see the contents of your refrigerator no matter where you are. No more getting to the grocery store and forgetting what you already have. Plan meals, bookmark recipes, and eliminate food waste.  
              </p>
              <h3>Share a fridge with family and friends</h3>
              <p>
                Fridge-It makes sharing refrigerators a breeze. Stick magnets on your fridge to send others notes, requests, and reminders, and to make sure no one eats the leftover pizza you've been thinking about all day. 
              </p>
            </div>
          </div>
        </div>
          {/* <div>
                <h3>"What a company"</h3>
                <p>The members of Team TADA are brilliant! <br/> I never knew I needed Fridge-It until I started using it!</p>
              </div>
                <h3>"I'll never not use Fridge-It ever again!"</h3>
                <p><img src='https://www.allbusiness.com/asset/2015/09/satisfied-customer.jpg'/>
                  <b>Nan</b> - very satisfied customer
                </p>

            <h3>More about Team TADA</h3>
            <p>
              Team TADA was formed on September 22, 2017 and were inspired to make Fridge-It by Hack Reactor's fridge. 
              They realized that the idea of keeping track of food was important for all students, thus
              Fridge-It was born! 
            </p>
            <button>Read More</button>
            <h4><a href='https://github.com/TEAM-TADA'>Members</a></h4>
            <h3>Members</h3>
            <p>
              TADA is an acronym of the creators of this group: Tiffany Phan, Angie Tang, Daniel Chong and Aaron Liss.
              <br/>The project owner of this app is Tiffany Phan.
              <br/>The scrum master of this app is Daniel Chong. 
            </p>
            <button>I'm Still Quite Interested</button>
                  <h4>About</h4>
                  <ul>
                    <li>Sitemap</li>
                    <li>Contact Us</li>
                    <li>Religious Ceremonies</li>
                    <li>Gazebo Plans</li>
                  </ul> */}
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