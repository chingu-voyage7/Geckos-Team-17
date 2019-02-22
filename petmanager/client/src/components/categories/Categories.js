import React, { Component } from 'react';

import Header from '../header/Header';
//import OwnerReg from '../owner/OwnerReg'; 
//import PetRegClient from '../pet/PetRegClient';
import RegClientOwn from '../authNot/RegClientOwn'; 
//import PetSelect from '../pet/PetSelect';
//import AddressReg from '../common/elements/AddressReg';
//import PetSlider from '../common/slider/PetSlider';
//import CategoriesListTabs from '../categories/CategoriesListTabs';
//import ShowEvents from '../events/ShowEvents';

class Categories extends Component {

  state = {
 
  }
 
  render () {
    return (
       
      <div>
        <div class="container">
        <Header />
        </div>
        <RegClientOwn />
         
        {this.props.children}
      </div>
    )
  }
}

export default Categories;