import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { onChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    onChange(label);
  }
    render() {
      const { label } = this.props;
      const { isChecked } = this.state;
        return (
            <div className="checkbox">
              <label className="checkbox">
                <input 
                  type="checkbox"
                  name="pettype"
                  value={label}
                  checked={isChecked}
                  onChange={this.toggleCheckboxChange}
                />
                {label}
              </label>
            </div>
        ); 
    }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;