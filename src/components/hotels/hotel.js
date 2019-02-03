import React, {Component} from 'react';
import HotelTitle from './HotelTitle';
import PropTypes from 'prop-types';

const Hotel = ({hotel: {name, imgUrl, features, book}}) => (
  <div className="hotel-container">
      <HotelTitle className='hotel-title' name={name}/>
      <img className='hotel-image' src={imgUrl}></img>
      <ul className='hotel-features'>
          {
              features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
              ))
          }
      </ul>
      <button className='hotel-book-now' onClick={()=>book(name)}>Book Now</button>
  </div>
);

Hotel.propTypes = {
    hotel: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgUrl: PropTypes.string,
        features: PropTypes.array,
        book: PropTypes.func
    })
};

export default Hotel;
