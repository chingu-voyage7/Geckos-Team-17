import React from 'react';
 
import PetSlider from '../common/slider/PetSlider';
import PetList from '../common/list/PetList';

const ShowEvents = () => {
  return (
    <div>
      <PetSlider 
        type="showPet"
        start={5}
        amount={5}
        settings={{
          dots: true
        }}
      />
  
      <PetList 
        type="petCard"
        loadmore={true}
        start={5}
        amount={5}
      />
    </div>
  )
}
 
export default ShowEvents;