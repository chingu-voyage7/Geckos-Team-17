import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-one-fifth">
              <div class="card-image image-column">
                <figure class="image image-center">
                  <img
                    class="is-rounded image-img right-align"
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Placeholder"
                  />
                </figure>
              </div>
            </div>
            <div class="column is-two-fifths left-align">
              <div class="column">
                <h3 class="title is-3">Anshul Dubey</h3>
              </div>
              <div class="column">
                <i class="fas fa-map-marker fa-fw left-align" />
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
        <div className="second-row">
          <div class="container is-fluid">
            <div class="columns">
              <div class="column is-one-fifth skills">
                <ol>
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                  <li>Skill 5</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
