import React, { Component } from 'react';

//import Header from '../header/Header';
//import Slider from '../common/slider/Slider';
import CategoriesListTabs from '../categories/CategoriesListTabs';
//import ShowEvents from '../events/ShowEvents';

class Categories extends Component {

  state = {
 
  }
  
  render () {
    return (
        
      <div>
        <CategoriesListTabs />
        {this.props.children}
      </div>
    )
  }
}

export default Categories;