import React, {Component} from 'react';
import PropTypes from 'prop-types';



const Preference = (props) => (
  <div className="preference-container">
      <input type='checkbox'
             checked={props.isChecked}
             onChange={event => props.onChange(props.name, event.target.checked)}
      />
        <span>{props.name}</span>
  </div>
);

Preference.propTypes = {
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

export default Preference;
