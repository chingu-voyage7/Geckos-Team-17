import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from '../bioCard/bioCard.css';

const PetBioCard = (props) => {
  return (
    <div className={styles.PetBioCard}>
      <span className={styles.ownerNamePhone}>
        nicky
      </span>
      <span className={styles.dateCalc}>
        <FontAwesome name="clock-o" />
        {props.dateCalc}
      </span>
      <span className={styles.petData}>
      </span>
    </div>
  );
};

export default PetBioCard; 