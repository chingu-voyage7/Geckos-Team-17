import React, { Component } from 'react';

import Header from '../header/Header';
import OwnerReg from '../owner/OwnerReg'; 
import PetReg from '../pet/PetReg'; 
import PetTypReg from '../pet/PetTypReg';
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
        <PetTypReg />
        <OwnerReg />
        <PetReg /> 
        {this.props.children}
      </div>
    )
  }
}

export default Categories;