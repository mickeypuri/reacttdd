import React, {Component} from 'react';
import Hotel from './hotel';
import PropTypes from 'prop-types';

const Hotels = (props) => (
  <div className="hotels-container">
      {
          props.hotels.map((hotel, idx) => (
              <Hotel hotel={hotel} key={idx}/>
          ))
      }
  </div>
);

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string,
      features: PropTypes.array,
      book: PropTypes.func
  }))
};

export default Hotels;
