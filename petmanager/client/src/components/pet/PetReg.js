import React, { Component } from 'react';

import axios from 'axios';


class PetReg extends Component {
  constructor() {
    super();
    this.state = {
      petname: '',
      owner: '',
      pettype: '',
      petbreed: '',
      petcolour: '',
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
    
    const newPet = {
      petname: this.state.petname,
      owner: this.state.owner,
      pettypeCat: this.state.pettype,
      petbreed: this.state.petbreed,
      petcolour: this.state.petcolour
    };
  
    this.setState({
      petname: '',
      owner: '',
      pettype: '',
      petbreed: '',
      petcolour: '',
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

export default PetReg;
