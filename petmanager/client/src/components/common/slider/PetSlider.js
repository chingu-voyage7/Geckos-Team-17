import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_templates';

class PetSlider extends Component {
 
  state = {
    pets: [
      {
        petname: '',
        pettype: '',
        firsteverarrivaldate: '',
        newarrivaldate: ''
      }
    ]
  }
   
  componentWillMount() {
    axios.get('/api/v1/pet?_start=${this.props.start}&_end=${this.props.amount}').then(res => {
      this.setState({
        pets: res.data
      })
    })
  }
  
  render() {
    return (
      <div>
        <SliderTemplate 
          data={this.state.pets} 
          type={this.props.type}
          settings={this.props.settings}  
        />
      </div>
    );
  }
}

export default PetSlider;