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
      pettype: this.state.pettype,
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
                
                <form>
                  <div className="field">
                    <label className="label">Pet Info</label>
                    <div className="control">
                      <input className="input" 
                        type="text" 
                        placeholder="Enter pet name here" 
                      />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" 
                        type="text" 
                        placeholder="Enter pet colour here" 
                      />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" 
                        type="text" 
                        placeholder="Enter pet breed here" 
                      />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                    </div>
                  </div>
                  <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Cat or Dog?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">

                    <div className="control">
                        <label className="radio">
                          <input 
                            type="radio" 
                            name="question" />
                          Cat
                        </label>
                        <label className="radio">
                          <input 
                            type="radio" 
                            name="question" />
                          Dog
                        </label>
                        <label className="radio">
                          <input 
                            type="radio" 
                            name="question" />
                          Other
                        </label>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="field is-grouped is-grouped-right">
                    <p className="control">
                      <a className="button is-link">
                        Next
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-text">
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

export default PetReg;


