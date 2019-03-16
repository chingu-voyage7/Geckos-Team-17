import React, { Component } from 'react';
 
import axios from 'axios';

import PetRegClient21 from '../pet/PetRegClient21'; 
import OwnerRegClient3 from '../owner/OwnerRegClient3';
import AddressRegClient3 from '../common/elements/AddressRegClient3';

class RegClientOwn242 extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,

      name: '',
      contactnumber: '',
      email: '',

      address_house: '',
      address_street: '',
      address_street2: '',
      address_post_code: '',
      address_city: '',

      pets: {},
      
      errors: {}
    };

    this.nextStep = this.nextStep.bind(this); 
    this.prevStep = this.prevStep.bind(this);

  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  nextStep() {
    const { step } = this.state;
    if (step !==3) {
      this.setState({ step: step + 1 });
    } else {
      alert("Submitting");
      
      const newOwner = {

        name: this.state.name,
        contactnumber: this.state.contactnumber,
        email: this.state.email,

        address: {
          house: this.state.address_house,
          street: this.state.address_street,
          street2: this.state.address_street2,
          post_code: this.state.address_post_code,
          city: this.state.address_city
        },

        petname: this.state.petname,

        pets: [],

        errors: {}
      };
    
      axios.post('/api/v1/owners/register', newOwner)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

    }
  }
 
    onChange(field) {
      return (e) => this.setState({ [field]: e.target.value });
    }

    handlePetTypeChange = (e) => {
      this.setState({ pettype: e.target.value });
    }
  
    render() {
      switch(this.state.step) {
        case 1:
          return (
            <PetRegClient21 
              key="pets"
              onSubmit={this.nextStep}
              petname={this.state.petname}
              pettype={this.state.pettype}
              petbreed={this.state.petbreed}
              onPetNameChange={this.onChange("petname")}
              onPetTypeChange={this.onChange("pettype")}
              onPetBreedChange={this.onChange("petbreed")}
            />
          );
        case 2:
          return (
            <AddressRegClient3
              key="address"
              onSubmit={this.nextStep}
              addressHouse={this.state.address_house}
              addressStreet={this.state.address_street}
              addressStreet2={this.state.address_street2}
              addressPostCode={this.state.address_post_code}
              addressCity={this.state.address_city}
              onAddressChangeHouse={this.onChange("address_house")}
              onAddressChangeStreet={this.onChange("address_street")}
              onAddressChangeStreet2={this.onChange("address_street2")}
              onAddressChangePostCode={this.onChange("address_post_code")}
              onAddressChangeCity={this.onChange("address_city")}
            />
          );
        case 3: 
          return (
            <OwnerRegClient3 
              key="owner"
              onSubmit={this.nextStep}
              name={this.state.name}
              contactnumber={this.state.contactnumber}
              email={this.state.email}
              onOwnerChangeName={this.onChange("name")}
              onOwnerChangeContactnumber={this.onChange("contactnumber")}
              onOwnerChangeEmail={this.onChange("email")}
            /> 
          );
      }
    }
}
 
export default RegClientOwn242;