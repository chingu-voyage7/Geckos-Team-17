import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
 
class PetList extends Component {

  state = {
    pets: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  
  componentWillMount() {
    axios.get
      ('http//localhost:5000/pets?_start=${this.state.start}&_end={this.state.end}')
        .then(res => {
          this.setState({
            pets: [...this.state.pets, ...res.data]
          })
        })
  }
  render() {
    console.log(this.state.pets)
    return (
      <div>
        Pets list page 
      </div>
    );
  }
}

export default PetList; 