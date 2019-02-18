import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import axios from 'axios'; 

class OwnerReg extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      contactnumber: '',
      email: '',
      address: 'Please enter address here',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value
    });
  }
 
  onSubmit(e) {
    e.preventDefault();


    const newOwner = {
      name: this.state.name,
      contactnumber: this.state.contactnumber,
      email: this.state.email,
      address: this.state.address
    };
  
    this.setState({
      name: '',
      contactnumber: '',
      email: '',
      address: 'Please enter address here',
      errors: {}
    });

    axios.post('/api/v1/owners/register', newOwner)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

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
                    <form className="form" onSubmit={this.onSubmit}>

                      <div className="field is-horizontal">
                        <div className="field-label is-normal is-grouped is-grouped-left">
                          <label className="label">Name:</label>  
                        </div> 
                          <input 
                            className="input" 
                            id="addNameInput"
                            type="text"
                            name="name" 
                            placeholder="Please enter owners name here"
                            value={this.state.name}
                            onChange={this.onChange}
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
                            placeholder="Please enter owners phone number here"
                            value={this.state.contactnumber}
                            onChange={this.onChange}
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
                            placeholder="Please enter owners email here"
                            value={this.state.email}
                            onChange={this.onChange}
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
                                  onSubmit={this.onSubmit}>
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
 
export default OwnerReg;