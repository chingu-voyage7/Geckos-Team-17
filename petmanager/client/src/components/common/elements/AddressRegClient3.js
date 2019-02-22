import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//import axios from 'axios';

class AddressRegClient3 extends Component {
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
                        <p className="subtitle has-text-grey">Please enter address details.</p>
                      </div>
                    </div>
                  </div>
                    <form className="form" onSubmit={this.handleSubmit}>

                      <div className="field is-horizontal">
                        <div className="field-label is-small is-grouped is-grouped-left">
                          <label className="label">House name:</label>  
                        </div> 
                          <input 
                            className="input" 
                            id="addHouseNameInput"
                            type="text"
                            name="address" 
                            key="house"
                            placeholder="Please enter owners house name/number here"
                            value={this.props.addressHouse}
                            onChange={this.props.onAddressChangeHouse}
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
                            key="street"
                            placeholder="Please enter owners street name and number here"
                            value={this.props.addressStreet}
                            onChange={this.props.onAddressChangeStreet}
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
                          key="street2"
                          placeholder="Please enter owners street name and number here"
                          value={this.props.addressStreet2}
                          onChange={this.props.onAddressChangeStreet2}
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
                            key="postcode"
                            placeholder="Please enter owners post code here"
                            value={this.props.addressPostCode}
                            onChange={this.props.onAddressChangePostCode}
                          />
                      </div>
 
                      <div className="field is-horizontal">
                        <div className="field-label is-small is-grouped is-grouped-left">
                          <label className="label">City:</label>  
                        </div>
                          <input 
                            className="input" 
                            id="addCityInput" 
                            type="text"
                            name="address" 
                            key="city"
                            placeholder="Please enter owners city here"
                            value={this.props.addressCity}
                            onChange={this.props.onAddressChangeCity}
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
                                  id="ownerAddressSubmitButton" 
                                  type="submit" 
                                  >
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
        </div> 
      </section>
    );
  }
}
 
export default AddressRegClient3; 