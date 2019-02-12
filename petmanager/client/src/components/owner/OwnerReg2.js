import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import axios from 'axios'; 

class OwnerReg2 extends Component {
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
    this.setState({ [e.target.name]: e.target.value});
  }
 
  onSubmit(e) {
    e.preventDefault();

    const newOwner = {
      name: this.state.name,
      contactnumber: this.state.contactnumber,
      email: this.state.email,
      address: this.state.address
    };
  
    
  /*
      console.log(newOwner);
  */ 

    axios.post('/api/v1/owners/register', newOwner)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

  }

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div class="container">
            <div className="column is-6 is-offset-3">
              <div className="row">
                <div className="box">
                  <form className="form" onSubmit={this.onSubmit}>
                    <label>
                      Name:
                      <input 
                        className="input" 
                        id="addNameInput"
                        type="text"
                        name="name" 
                        placeholder="Please enter owners name here"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </label>

                    <label>
                      Phone:
                      <input 
                        className="input" 
                        id="addPhoneInput" 
                        type="number"
                        name="contactnumber" 
                        placeholder="Please enter owners phone number here"
                        value={this.state.contactnumber}
                        onChange={this.onChange}
                      />
                    </label>

                    <div className="field">
                      <label className="label">
                        Email:
                        <input 
                          className="input" 
                          id="addEmailInput" 
                          type="email"
                          name="email" 
                          placeholder="Please enter owners email here"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </label>
                    </div>


                    <div className="field is-horizontal">
                      <div className="field-label">
                        {/*<!-- Left empty for spacing -->*/}
                      </div>
                        <div className="field-body">
                          <div className="field is-grouped is-grouped-right">
                            <p className="control">
                              <button className="button is-primary is-success" type="submit" onSubmit={this.onSubmit}>
                                Submit
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
      </section>
    );
  }
}

export default OwnerReg2;