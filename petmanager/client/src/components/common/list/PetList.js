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
   
  render() {
    return (
      <div>
        Pets list page 
      </div>
    );
  }
}

export default PetList; 