import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

import styles from '../list/list.css';
import Button from '../buttons/Buttons'; 

class PetsList extends Component {

  state = {
    owners: [],
    pets: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  
  componentWillMount() {
    this.req(this.state.start, this.state.end)
  }

  req = (start, end) => {
    axios.get
      ('http://localhost:5000/api/v1/pets?_start=${start}&_end={end}')
        .then(res => {
          this.setState({
            pets: [...this.state.pets, ...res.data]
          })
    })
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.req(this.state.end, end)
  }

  renderPets = (type) => {
    let petsListTemplate = null;

    switch(type) {
      case('petCard'):
        petsListTemplate = this.state.pets.map((pet, index) => (
          <CSSTransition
            classNames={{
              enter: styles.petsList_wrapper,
              enterActive: styles.petsList_wrapper_enter
            }}
            timeout={500}
            key={index}
          > 
            <div>
              <div className={styles.petslist_pet}>
                <Link to={'/pets/${pet.id}'}>
                    owners 
                  <h2>{pet.petname}</h2>
                {/* Not certain which is valid, top one or bottom, so...
                  <Link to={'http://localhost:5000/api/v1/pets/${pet.id}'}>
                  */} 
                </Link>
              </div> 
            </div>
          </CSSTransition>
        ))
        break;
      default:
        petsListTemplate = null;
    }

    return petsListTemplate;
  }

  render() {
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderPets(this.props.type)}
        </TransitionGroup>
        <Button 
          type="loadmorePetsCard"
          loadMore={() => this.loadMore()}
          cta="Load More Pets"
        />
      </div>
    );
  }
}

export default PetsList;