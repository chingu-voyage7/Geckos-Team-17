import React from 'react';
//import PropTypes from 'prop-types';

const SelectPet = (props) => {
  return (
    <div className="form">
      <label htmlFor={props.label} className="label">
        {props.label}
      </label> 
      <div className="control">
        <select
        id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          > 
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options.map(option => {
            return (
              <option 
                key={option}
                value={option}
                label={option}
                >
                  {option}
              </option>
            );
          })} 
        </select>
      </div>       
    </div>
  );
};

export default SelectPet; 