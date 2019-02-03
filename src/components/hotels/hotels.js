import React, {Component} from 'react';
import Hotel from './hotel';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import fetchHotels from '../../actions/asyncCreators/fetchHotels';

export class Hotels extends Component{

    componentDidMount () {
        this.props.fetchHotels(this.props.preferences);
    }

    render() {
        return (
            <div className="hotels-container">
                {
                    (this.props.hotels && this.props.hotels.length > 0) ? this.props.hotels.map((hotel, idx) => (
                        <Hotel hotel={hotel} key={idx}/>
                    )) : null
                }
            </div>
        );
    }
}

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string,
      features: PropTypes.array,
      book: PropTypes.func
  }))
};

const mapStateToProps = state => ({
    hotels: state.hotels,
    preferences: state.preferences
});

const mapDispatchToProps = {
    fetchHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
