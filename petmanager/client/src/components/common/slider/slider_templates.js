import React from 'react';
import { Link } from 'react-router-dom';

import Slick from 'react-slick';
import styles from './slider.css';

const SliderTemplates = (props) => {
  
    let template = null;
    
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    switch(props.type) {
      case ('displayed'):
        template = props.data.map( (item, i) => {
          return(
            <div key={i}>
              <div className={styles.displayed_item}>
                <Link to={'/pets/${item.id}'}>
                  <div className={styles.displayed_item.petname}> 
                    {item.petname}
                  </div>
                </Link>
              </div>
            </div> 
          )
        })

        break;
      default:
      template = null;
    }
  
    return (
      <Slick {...settings} >
        {template} 
      </Slick>
    );
}; 

export default SliderTemplates;