import React from 'react';

//import CategoriesListTabs from '../categories/CategoriesListTabs'; 
import Slider from '../common/slider/Slider';

const ShowEvents = () => {
  return (
    <div>
      <Slider 
        type="petShown"
        start={0}
        amount={1}
        settings={{
          dots: true
        }}
      /> 
    </div>
  )
}
 
export default ShowEvents;