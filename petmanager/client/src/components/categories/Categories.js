import React, { Component } from 'react';

import Header from '../header/Header';
//import PetSlider from '../common/slider/PetSlider';
//import CategoriesListTabs from '../categories/CategoriesListTabs';
//import ShowEvents from '../events/ShowEvents';
 
class Categories extends Component {

  state = {
 
  }
  
  render () {
    return (
        
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
 
export default Categories;