import React from 'react';
 
import PetSlider from '../common/slider/PetSlider';
import PetList from '../common/list/PetList';

const ShowEvents = () => {
  return (
    <div>
      <PetSlider 
        type="showPet"
        start={0}
        amount={1}
        settings={{
          dots: true
        }}
      />
  
      <PetList />
    </div>
  )
}
 
export default ShowEvents;