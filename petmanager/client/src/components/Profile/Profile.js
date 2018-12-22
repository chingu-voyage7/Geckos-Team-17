import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div class="container is-fluid">
          <div class="columns">
            <div class="is-2-desktop is-5-mobile level-item">
              <div class="card-image image-column">
                <figure class="image image-center">
                  <img class="is-rounded left-align right-align" src="/assets/images/random.jpg" alt="profile pic"/>
                </figure>
              </div>
            </div>
            <div class="is-two-fifths-desktop is-7-mobile space">
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
              <div class="column is-2 skills">
                <article class="message">
                  <div class="message-header">
                    <p>My skills</p>
                    <button class="fa fa-pencil icon" aria-label="delete" />
                  </div>
                  <div class="message-body">
                    <ol>
                      <li>Skill 1</li>
                      <li>Skill 2</li>
                      <li>Skill 3</li>
                      <li>Skill 4</li>
                      <li>Skill 5</li>
                    </ol>
                  </div>
                </article>
              </div>
              <div class="column is-two-fifths space">
                <Tabs>
                  <TabList>
                    <Tab>Timeline</Tab>
                    <Tab>Basic Info</Tab>
                  </TabList>

                  <TabPanel>
                    <ol>
                      <li>
                        Started working in sector 1 in Leeds from June 2016
                      </li>
                      <li>Moved to Manchester to work in May 2017</li>
                      <li>Got recognition from governemnt in December 2017</li>
                      <li>
                        Started working in london as pet vet in ABC hospital
                      </li>
                    </ol>
                  </TabPanel>
                  <TabPanel>
                    <table class="table">
                      <tbody>
                        <tr>
                          <th>
                            <strong>Phone</strong>
                          </th>
                          <td> +91 10000111108</td>
                        </tr>
                        <tr>
                          <th>
                            <strong>Email</strong>
                          </th>
                          <td>randomperson@gmail.com</td>
                        </tr>
                        <tr>
                          <th>
                            <strong>Address</strong>
                          </th>
                          <td>Apartment 1, random colony</td>
                        </tr>
                        <tr>
                          <th>
                            <strong>Birthday</strong>
                          </th>
                          <td>1st June 1980</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
