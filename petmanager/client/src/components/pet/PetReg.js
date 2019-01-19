import React, { Component } from 'react';

class PetReg extends Component {
  render() {
    return (
      <div className="owner-register">
        <div className="container has-text-centered">
          <div className="row">
            <div className="column is-8 is-offset-4">
              <p className="subtitle has-text-grey">Please enter pet details.</p>
              <div className="box">
                <form>
                  <div className="field">
                    <label className="label">Pet Info</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Enter pet name here" />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Enter pet colour here" />  
                     {/* <input className="input is-large" type="email" placeholder="Your Email" autofocus /> */}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="text" placeholder="Enter pet breed here" />  
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
                          <input type="radio" name="question" />
                          Cat
                        </label>
                        <label className="radio">
                          <input type="radio" name="question" />
                          Dog
                        </label>
                        <label className="radio">
                          <input type="radio" name="question" />
                          Other
                        </label>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="field is-grouped is-grouped-right">
                    <p className="control">
                      <a className="button is-link is-primary">
                        Next
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-link is-light">
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


