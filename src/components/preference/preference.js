import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Preference = (props) => (
  <div className="preference-container">
      <input type='checkbox' /> <span>{props.name}</span>
  </div>
);

Preference.propTypes = {
    name: PropTypes.string.isRequired
};

export default Preference;
