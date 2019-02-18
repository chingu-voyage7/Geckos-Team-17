import React, { Component } from 'react';
import SelectPet from '../common/elements/SelectPet';

import axios from 'axios';


class PetRegY extends Component {
  constructor() {
    super();
    this.state = {
      newPet: {
        petname: '',
        petbreed: '',
        pettype: '',
        errors: {}
      },

      pettypeOptions: [ 'cat', 'dog', 'other' ]

    };
 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  
  onChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newPet: {
          ...prevState.newPet,
          [name]: value
        }
      }),
      () => console.log(this.state.newPet)
    );
  };
 

  onSubmit(e) {
    e.preventDefault();
    
    const newPet = {
      petname: this.state.petname,
      petbreed: this.state.petbreed,
      pettype: this.state.pettype
    };

    { /* let petData = this.state.newPet; */ }
  
    this.setState({
      petname: '',
      petbreed: '',
      pettype: [],
      errors: {}
    });

    axios.post('/api/v1/pets/register', newPet)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

  }
  
  render() {
    return (

      <div className="hero-body">
          <div className="container">
            <div className="column is-6 is-offset-3">
              <div className="row">
                <div className="box">
                <div className="field">
                  <div className="container has-text-centered">
                    <div className="column is-5">
                      <h3 className="title has-text-grey">Register pet here</h3>
                      <p className="subtitle has-text-grey">Please enter pet details.</p>
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
                        id="addPetNameInput"
                        type="text"
                        name="petname" 
                        placeholder="Enter pet name here"
                        value={this.state.petname}
                        onChange={this.onChange} 
                      />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                  </div>  

                  <div className="field is-horizontal">
                    <div className="field-label is-normal is-grouped is-grouped-left">
                      <label className="label">Breed:</label>  
                    </div>
                      <input 
                        className="input" 
                        id="addPetBreedInput"
                        type="text"
                        name="petbreed" 
                        placeholder="Enter pet breed here"
                        value={this.state.petbreed}
                        onChange={this.onChange} 
                      />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                  </div>  
                   
                  <SelectPet 
                    label={"Pet Type:"}
                    name={"pettype"}
                    options={this.state.pettypeOptions}
                    value={this.state.newPet.pettype}
                    placeholder={"Select Pet Type"}
                    onChange={this.onChange}
                  />{""}
 
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
    );
  }
}

export default PetRegY;
