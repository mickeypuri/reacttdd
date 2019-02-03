import React, {Component} from 'react';
import HotelTitle from './HotelTitle';

const Hotels = () => (
  <div className="hotels-container">
      <HotelTitle className='hotel-title'/>
      <img className='hotel-image'></img>
      <ul className='hotel-features'></ul>
      <button className='hotel-book-now'>Book Now</button>
  </div>
);

export default Hotels;
