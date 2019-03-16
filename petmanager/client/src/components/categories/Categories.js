import React, { Component } from 'react';

import Header from '../header/Header';
//import PetReg from '../pet/PetReg'; 
//import PetType24 from '../pet/PetType24';
import RegClientOwn243 from '../authNot/RegClientOwn243'; 
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
        <RegClientOwn243 />
                 
        {this.props.children} 
      </div>
    )
  }
}

export default Categories;