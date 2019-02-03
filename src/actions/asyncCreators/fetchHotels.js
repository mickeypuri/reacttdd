import hotelsRequestCreator from '../creators/hotelsRequest';
import types from '../actionTypes';

//import hotelData from './fakeApiData';

import httpService from '../../services/http/httpService';

const fetchHotelSuccess = (body) => {
    return {
        type: types.FETCH_HOTELS_SUCCESS,
        payload: body
    };
};

const fetchHotelFailure = (ex) => {
    return {
        type: types.FETCH_HOTELS_FAILURE,
        payload: ex
    };
};

const fetchHotels = (preferences) => dispatch => {
    dispatch(hotelsRequestCreator());
    const preference = preferences.join(':');

    dispatch(fetchHotelSuccess(hotelData));

/*    return httpService.get('/hotels', {params: {preference}})
        .then(resp => dispatch(fetchHotelSuccess(resp.data)))
        .catch(ex => dispatch(fetchHotelFailure(ex)));*/
};

export default fetchHotels;