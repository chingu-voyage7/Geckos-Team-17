import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//import axios from 'axios'; 

class OwnerRegClient3 extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="owner-register">
          <div className="hero-body">
            <div className="container">
              <div className="column is-6 is-offset-3">
                <div className="row">
                  <div className="box">
                  <div className="field">
                    <div className="container has-text-centered">
                      <div className="column is-5">
                        <h3 className="title has-text-grey">Register new client here</h3>
                        <p className="subtitle has-text-grey">Please enter owner details.</p>
                      </div>
                    </div>
                  </div>
                    <form className="form" onSubmit={this.handleSubmit}>

                      <div className="field is-horizontal">
                        <div className="field-label is-normal is-grouped is-grouped-left">
                          <label className="label">Name:</label>  
                        </div> 
                          <input 
                            className="input" 
                            id="addNameInput"
                            type="text"
                            name="name" 
                            key="name"
                            placeholder="Please enter owners name here"
                            value={this.props.name}
                            onChange={this.props.onOwnerChangeName}
                          />
                      </div>

                      <div className="field is-horizontal">
                        <div className="field-label is-normal is-grouped is-grouped-left">
                          <label className="label">Phone:</label>  
                        </div>
                          <input 
                            className="input" 
                            id="addPhoneInput" 
                            type="number"
                            name="contactnumber" 
                            key="contactnumber"
                            placeholder="Please enter owners phone number here"
                            value={this.props.contactnumber}
                            onChange={this.props.onOwnerChangeContactnumber}
                          />
                      </div>

                      <div className="field is-horizontal">
                        <div className="field-label is-normal is-grouped is-grouped-left">
                          <label className="label">Email:</label>  
                        </div>
                          <input 
                            className="input" 
                            id="addEmailInput" 
                            type="email"
                            name="email" 
                            key="email"
                            placeholder="Please enter owners email here"
                            value={this.props.email}
                            onChange={this.props.onOwnerChangeEmail}
                          />
                      </div>

                      <div className="field is-horizontal">
                        <div className="field-label">
                          {/*<!-- Left empty for spacing -->*/} 
                        </div>
                          <div className="field-body">
                            <div className="field is-grouped is-grouped-right">
                              <p className="control">
                                <button 
                                  className="button is-primary is-success"
                                  id="ownerNextButton" 
                                  type="submit" 
                                  >
                                    Next
                                </button>
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
        </div>
      </section>
    );
  }
}

export default OwnerRegClient3; 