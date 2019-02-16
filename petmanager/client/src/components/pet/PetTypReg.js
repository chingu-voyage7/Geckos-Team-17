import React, { Component } from 'react';
import Checkbox from '../common/elements/Checkbox';
 
const pettypes = [
    'it is a cat', 
    'it is a dog', 
    'some other'
];

class PetTypReg extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected');
    }
  }

  createCheckbox = (label) => (
    <div className="container">
      <div className="field is-grouped is-grouped-multiline">
       <div className="column is-2 is-offset-4">
       <div className="box">
       <p className="control">
    <Checkbox
      label={label}
      onChange={this.toggleCheckbox}
      key={label}
    />
    </p>
    </div>
    </div>
    </div>
    </div>
  )

  createCheckboxes = () => (
    pettypes.map(this.createCheckbox)
  )

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="pet-type-register">
          <div className="hero-body">
            <div className="container">
              <div className="column is-2 is-offset-4">
                <p className="subtitle has-text-grey">Pet type..</p>
                </div>
          
          <form className="form" onSubmit={this.onSubmit}>
            {this.createCheckboxes()}

            <div className="column is-2 is-offset-4">
            <div className="field is-horizontal">
                        <div className="field-label">
                          {/*<!-- Left empty for spacing -->*/}
                        </div>
            <p className="control">
              <button 
                className="button is-primary is-success" 
                type="submit" 
                onSubmit={this.onSubmit}>
                Next
              </button>
            </p>
            </div>
            </div>
          </form>
          </div>
        </div>  
        </div>  
        </section> 
  );
  }
}

export default PetTypReg; 