import React from 'react';

import TodoItemSlider from '../common/slider/TodoItemSlider';
import OwnerSlider from '../common/slider/OwnerSlider';
import PetSlider from '../common/slider/PetSlider';
import OwnersList from '../common/list/OwnersList';
import PetsList from '../common/list/PetsList';

const ShowEvents = () => {
  return (
    <div>
      <TodoItemSlider 
      type="showTodo"
      start={5}
      amount={5}
      settings={{
        dots: true
      }}
      />

      <OwnerSlider 
      type="showOwner"
      start={5}
      amount={5}
      settings={{
        dots: true
      }}
      />

      <PetSlider 
        type="showPet"
        start={5}
        amount={5}
        settings={{
          dots: true
        }}
      />

      <OwnersList 
        type="ownerCard"
        loadmore={true}
        start={5}
        amount={5}
      />
  
      <PetsList 
        type="petCard"
        loadmore={true}
        start={5}
        amount={5}
      />
    </div>
  )
}

export default ShowEvents;