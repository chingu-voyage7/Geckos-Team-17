import React from 'react';
import { Link } from 'react-router-dom';

import styles from './buttons.css';

const Buttons = (props) => {

  let petCardsTemplate = null;

  switch(props.type) {
    case 'loadmorePetsCard':
      petCardsTemplate = (
        <div className={styles.blue_btn}
          onClick={props.loadMore}
        >
          {props.cta}
        </div>
      );
      break;
    default:
      petCardsTemplate = null
  }
    return petCardsTemplate;
};

export default Buttons;