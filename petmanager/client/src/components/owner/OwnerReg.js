import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OwnerReg extends Component {
  render() {
    return (
      <div className="owner-register">
        <div className="container has-text-centered">
          <div className="row">
            <div className="column is-8 is-offset-4">
              <h3 className="title has-text-grey">Register new client here</h3>
              <p className="subtitle has-text-grey">Please enter owner details.</p>
              <div className="box">
                <form>
                  <div className="field">
                    <label className="label">Owner's Name</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Text input" />  
                      {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label" />
                      <div className="field-body">
                        <div className="field is-expanded">
                          <div className="field has-addons">
                            <p className="control">
                              <a className="button is-static">
                                +44
                              </a>
                            </p>
                            <p className="control is-expanded">
                              <input className="input" type="tel" placeholder="Your phone number" />
                            </p>
                          </div>
                            <p className="help">Do not enter the first zero</p>
                        </div>
                      </div>
                    </div>
                  <div className="field">
                  <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input is-danger" type="email" placeholder="Email input" defaultValue="hello@" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle" />
                      </span>
                    </div>
                  </div>
                  <div className="field is-grouped is-grouped-right">
                      <p className="control">
                        <a className="button is-primary is-link">
                          Submit
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-light is-link">
                          Cancel
                        </a>
                      </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnerReg;