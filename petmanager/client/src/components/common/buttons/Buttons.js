import React from 'react';
import { Link } from 'react-router-dom';

import styles from './buttons.css';

const Buttons = (props) => {

  let petCardsTemplate = null;

  switch(props.type) {
    case 'loadmore':
      petCardsTemplate = null;
      break;
    default:
      template = null
  }
    return petCardsTemplate;
};

export default Buttons; 