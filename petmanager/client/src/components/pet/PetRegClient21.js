import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

//import axios from 'axios';

class PetRegClient21 extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(); 
  }

 // reset() {
 //   this.setState({
 //     pets: []
 //   });
 // }

  render() {
    return (
    //  <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="column is-6 is-offset-3">
            <div className="row">
              <div className="box">
              <div className="field">
                <div className="container has-text-centered">
                  <div className="column is-5">
                  //  <h3 className="title has-text-grey">Register pet here</h3>
                    <p className="subtitle has-text-grey">Please enter pet name</p>
                  </div>
                </div>
              </div>
              
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field is-horizontal">
                  <div className="field-label is-normal is-grouped is-grouped-left">
                    <label className="label">Pet name:</label>  
                  </div>
                    <input 
                      className="input" 
                      id="addPetNameInput"
                      type="text"
                      key="petname"
                      name="petname" 
                      placeholder="Enter pet name here"
                      value={this.props.petname}
                      onChange={this.props.onPetNameChange} 
                    />  
                </div>  
    
                <div className="field is-horizontal">
                  <div className="field-label is-normal is-grouped is-grouped-left">
                    <label className="label">Pet type:</label>  
                  </div>
                    <input 
                      className="input" 
                      id="addPetTypeInput"
                      type="text"
                      key="pettype"
                      name="pettype" 
                      placeholder="Enter pet type here"
                      value={this.props.pettype}
                      onChange={this.props.onPetTypeChange} 
                    />  
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal is-grouped is-grouped-left">
                    <label className="label">Pet breed:</label>  
                  </div>
                    <input 
                      className="input" 
                      id="addPetBreedInput"
                      type="text"
                      key="petbreed"
                      name="petbreed" 
                      placeholder="Enter pet breed here"
                      value={this.props.petbreed}
                      onChange={this.props.onPetBreedChange} 
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
                        //  onClick={() => this.reset()}
                          className="button is-primary is-success"
                          type="submit">
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
     // </section>
    );
  }
}
 
export default PetRegClient21; 