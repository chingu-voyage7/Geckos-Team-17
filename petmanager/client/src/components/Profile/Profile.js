import React, { Component } from "react";
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-one-third">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="profile pic"
                  />
                </figure>
              </div>
            </div>
            <div class="column is-two-fifths">
              <div class="column">
                <h3 class="title is-3">Anshul Dubey</h3>
              </div>
              <div class="column">
                <i class="fas fa-map-marker fa-fw left-align"/>
                H-3 Krishna Nagar
              </div>
              <div class="column">
                <a href="/">Edit Profile</a>
              </div>
              <div class="column">
                <span>
                  <i class="fas fa-address-book fa-fw left-align" />
                  Add Contacts
                </span>
                &emsp;&emsp;
                <span>
                  <i class="fas fa-list fa-fw left-align" />
                  My to-do list
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
