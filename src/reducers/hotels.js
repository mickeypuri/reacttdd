import types from '../actions/actionTypes';

const initialState = [];

const hotels = (state = initialState, action) => {
    if (action.type === types.FETCH_HOTELS_SUCCESS) {
        return action.payload;
    }
    return state;
};

export default hotels;