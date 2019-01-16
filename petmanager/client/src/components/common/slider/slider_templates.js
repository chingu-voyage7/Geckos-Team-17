import React from 'react';
import { Link } from 'react-router-dom';
 
import Slick from 'react-slick';
import styles from './slider.css';

const SliderTemplates = (props) => {
  
    let petSliderTemplate = null;
  
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
        petSliderTemplate = props.data.map( (pet, index) => {
          return(
            <div key={index}>
              <div className={styles.showPet_pet}>
                <Link to={'http://localhost:5000/api/v1/pets/${pet.id}'}>
                  <div className={styles.showPet_petBio}> 
                    {pet.petname} 
                  </div>
                </Link> 
              </div>
            </div> 
          )
        })

        break;
      default:
      petSliderTemplate = null;
    }
    return (
      <Slick {...settings} >
        {petSliderTemplate} 
      </Slick>
    );
}; 

export default SliderTemplates;