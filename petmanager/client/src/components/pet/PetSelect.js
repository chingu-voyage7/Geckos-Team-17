import React, { Component } from 'react';
import SelectPet from '../common/elements/SelectPet'; 

import axios from 'axios'; 

class PetSelect extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      newPet: { 
       pettype: '',
       errors: {}
      },

      pettypeOptions: [ 'cat', 'dog', 'other' ]
    };
  
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onSelectChange.bind(this);
  }

    onSelectChange(e) {
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
        pettype: this.state.pettype
      };

      let petData = this.state.newPet;

        axios.post('/api/v1/pets/register', (newPet ['pettype']))
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      
      this.setState({
        newPet: { pettype: ''}
      });  

    };
  
  render() {
		return (
			<section className="hero is-success is-fullheight">
        <div className="pet-type-register">
          <div className="hero-body">
						<div className="container">
							<div className="field is-grouped is-grouped-multiline">
								<div className="column is-2 is-offset-4">
									<div className="row">
										<div className="box">
										<div className="field">
												<p className="subtitle has-text-grey">Pet type..</p>

												<form className="form" onSubmit={this.onSubmit}>

                          <SelectPet 
                            label={"PetType"}
                            name={"pettype"}
                            options={this.state.pettypeOptions}
                            value={this.state.newPet.pettype}
                            placeholder={"Select Pet Type"}
                            onChange={this.onSelectChange}
                          />{""}


													<div className="field is-horizontal">
														<div className="field-label">
															{/*<!-- Left empty for spacing -->*/}
														</div>
														<div className="field-body">
															<div className="field is-grouped is-grouped-right">
																<p className="control">
																	<button className="button is-primary is-success" type="submit" onSubmit={this.onSubmit}>
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
					</div>
				</div>
			</section>
		);
	}
}

export default PetSelect; 