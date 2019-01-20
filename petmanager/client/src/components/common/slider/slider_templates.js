import React from 'react';
import { Link } from 'react-router-dom';
 
import Slick from 'react-slick';
import styles from './slider.css';
 
const SliderTemplates = (props) => {
  
    let sliderTemplate = null;
  
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...props.settings 
    }
  
    switch(props.type) {
      case ('showPet'):
        sliderTemplate = props.data.map( (pet, index) => {
          return(
            <div key={index}>
              <div className={styles.showPet_pet}>
                <Link to={'/pets/${pet.id}'}>
                {/* Not certain which is valid, top one or bottom, so...
                <Link to={'http://localhost:5000/api/v1/pets/${pet.id}'}>
                */}
                  <div className={styles.showPet_petBio}> 
                    {pet.petname} 
                  </div>
                </Link> 
              </div>
            </div> 
          )
        })

        break;

      case ('showOwner'):
        sliderTemplate = props.data.map( (owner, index) => {
          return(
            <div key={index}>
              <div className={styles.showOwner_owner}>
                <Link to={'/owners/${owner.id}'}>
                  <div className={styles.showOwner_ownerBio}>
                    {owner.name}
                  </div>
                </Link>
              </div>
            </div>
          )
        })

        break;

      case ('showTodo'):
        sliderTemplate = props.data.map( (todo, index) => {
          return(
            <div key={index}>
              <div className={styles.showTodo_todo}>
                <Link to={'/todos/${todo.id}'}>
                  <div className={styles.showTodo_item}>
                    {todo.itemname}
                  </div>
                </Link>
              </div>
            </div>
          )
        })

        break;

      default:
      sliderTemplate = null;
    }
    return (
      <Slick {...settings} >
        {sliderTemplate} 
      </Slick>
    );
}; 

export default SliderTemplates;