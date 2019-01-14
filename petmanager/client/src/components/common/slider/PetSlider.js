import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_templates';

class PetSlider extends Component {

  state = {
    pets: []
  }
  
  componentWillMount() {
    axios.get('/api/v1/pets').then(res => {
      this.setState({
        pet: res.data
      })
    })
  }
 
  render() {
    return (
      <div>
        <SliderTemplate data={this.state.pets} type="displayed" />
      </div>
    );
  }
}

export default PetSlider;