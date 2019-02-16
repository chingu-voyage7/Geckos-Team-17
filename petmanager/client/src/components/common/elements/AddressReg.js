import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import axios from 'axios'; 

class AddressReg extends Component {
  constructor() {
    super();
    this.state = {
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
      address: this.state.address
    };
  
    this.setState({
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
                        <p className="subtitle has-text-grey">Please enter address details.</p>
                      </div>
                    </div>
                  </div>
                    <form className="form" onSubmit={this.onSubmit}>

                      <div className="field is-horizontal">
                        <div className="field-label is-small is-grouped is-grouped-left">
                          <label className="label">House name:</label>  
                        </div> 
                          <input 
                            className="input" 
                            id="addHouseNameInput"
                            type="text"
                            name="address" 
                            placeholder="Please enter owners house name/number here"
                            value={this.state.address}
                            onChange={this.onChange}
                          />
                      </div>

                      <div className="field is-horizontal">
                        <div className="field-label is-small is-grouped is-grouped-left">
                          <label className="label">Street name:</label>  
                        </div>
                          <input 
                            className="input" 
                            id="addStreetName1Input" 
                            type="text"
                            name="address" 
                            placeholder="Please enter owners street name and number here"
                            value={this.state.address1}
                            onChange={this.onChange}
                          />
                      </div>

                      <div className="field is-horizontal">
                        <div className="field-label is-small is-grouped is-grouped-left">
                          <label className="label">Street name:</label>  
                        </div>
                        <input 
                          className="input" 
                          id="addStreetName2Input" 
                          type="text"
                          name="address" 
                          placeholder="Please enter owners street name and number here"
                          value={this.state.address2}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="field is-horizontal">
                        <div className="field-label is-small is-grouped is-grouped-left">
                          <label className="label">Post code:</label>  
                        </div>
                          <input 
                            className="input" 
                            id="addPostCodeInput" 
                            type="text"
                            name="address" 
                            placeholder="Please enter owners post code here"
                            value={this.state.address3}
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
                                  id="ownerAddressNextButton" 
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
 
export default AddressReg;