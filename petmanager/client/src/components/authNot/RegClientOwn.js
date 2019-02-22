import React, { Component } from 'react';

import axios from 'axios';

import OwnerRegClient3 from '../owner/OwnerRegClient3';
import AddressRegClient3 from '../common/elements/AddressRegClient3';

class RegClientOwn extends Component {
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
    if (step !==2) {
      this.setState({ step: step + 1});
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
        errors: {}
      };
    
      axios.post('/api/v1/owners/register', newOwner)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

    {/* let petData = this.state.newPet; 

      onOwnerSubmit(e) {
        this.props.ownerData(this.state);
  
      } */}

    }
  }

    onChange(field) {
      return (e) => this.setState({ [field]: e.target.value });
    }
  
    render() {
      switch(this.state.step) {
        case 1:
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
      }
          
    }
}

export default RegClientOwn; 