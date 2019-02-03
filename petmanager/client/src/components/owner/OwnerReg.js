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
                    <label className="label">Owner Info</label>
                  </div>
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label className="label">Name</label>
                    </div>
                      <div class="field-body">
                        <div className="field">
                          <input className="input" type="text" placeholder="Please enter owners name here" />
                        </div>
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
                              <input className="input" type="tel" placeholder="Please enter phone number here" />
                            </p>
                          </div>
                            <p className="help" >Do not enter the first zero</p>
                        </div>
                      </div>
                    </div>
                    <div class="field is-horizontal">
                      <div class="field-label is-normal">
                        <label className="label">Email</label>
                      </div>
                      <div class="field-body">
                        <div className="field">
                          <div className="control has-icons-left">
                            <input className="input" type="email" placeholder="Please enter email here" />
                            <span className="icon is-small is-left">
                              <i className="fas fa-envelope" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label">Address</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <textarea className="textarea" placeholder="Please enter address here"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="field is-horizontal">
                      <div class="field-label">
                        {/*<!-- Left empty for spacing -->*/}
                      </div>
                      <div class="field-body">
                        <div className="field is-grouped is-grouped-right">
                            <p className="control">
                              <a className="button is-primary is-link">
                                Next
                              </a>
                            </p>
                            <p className="control">
                              <a className="button is-light is-text">
                                Cancel
                              </a>
                            </p>
                        </div>
                      </div>
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