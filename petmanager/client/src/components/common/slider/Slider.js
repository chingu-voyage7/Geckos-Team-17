import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplate from './slider_templates';

class Slider extends Component {

  state = {
    pets: []
  }
  
  componentWillMount() {
    axios.get('/api/v1/pets?_start=${this.props.start}&_end=${this.props.amount}').then(res => {
      this.setState({
        pet: res.data
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

export default Slider;