import React, {Component} from 'react';
import Hotel from './hotel';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Hotels = (props) => (
  <div className="hotels-container">
      {
          (props.hotels && props.hotels.length > 0) ? props.hotels.map((hotel, idx) => (
              <Hotel hotel={hotel} key={idx}/>
          )) : null
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

const mapStateToProps = state => ({
    hotels: state.hotels
});

export {Hotels};

export default connect(mapStateToProps)(Hotels);
