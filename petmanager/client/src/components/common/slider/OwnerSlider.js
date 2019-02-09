import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates'; 

class OwnerSlider extends Component {

  state = {
    owners: [],
    pets: []
  }
 
  componentWillMount() {
    axios.get
      ('/api/v1/owners?_start=${this.props.start}&_end=${this.props.amount}').then(res => {
        this.setState({
          pets: res.data
      })
    }) 
    {/* Depending on if proxy setting used, top one or bottom, so.. 
      ('http://localhost:5000/api/v1/owners?_start=${this.props.start}&_end=${this.props.amount}').then(res => {
          this.setState({
            pets: res.data
          })
      })
    */}
  }
  
  render() {
    return (
      <div>
        <SliderTemplates 
          data={this.state.owners} 
          type={this.props.type}
          settings={this.props.settings}  
        />
      </div>
    );
  }
}

export default OwnerSlider;