import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../list/list.css';
import axios from 'axios';

//import Button from '../buttons/Buttons';

class OwnersList extends Component {

    state = {
        owners: [],
        pets: [],
        todos: [],
        petname: this.props.petname,
        petrounds: this.props.updatepetrounds,  
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    
    componentWillMount() {
      axios.get('http://localhost:5000/api/v1/owners?_start=${this.state.start}&_end=${this.state.end}')
        .then(res => {
          this.setState({
            owners:[...this.state.owners, ...res.data]
          })
        })
    }
    
    render() {
      console.log(this.state.owners)
      return(
        <div>
          {/*<div className={styles.ownersList_wrapper}>
              { this.renderPetRounds() }
            </div>*/}
        </div>    
      )
    }
}

export default OwnersList;