import React, { Component } from 'react';
import axios from 'axios';

class PetSlider extends Component {

  state = {
    petname: ''
  }
  
  componentWillMount() {
    axios.get('/api/v1/pets').then(res => {
      this.setState({
        petname: res.data
      })
    })
  }

  render() {
    console.log(this.state.petname)
    return (
      <div>
        Slider content 
      </div>
    );
  }
}

export default PetSlider;