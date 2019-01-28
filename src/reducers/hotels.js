import types from '../actions/actionTypes';

const initialState = [];

const hotels = (state = initialState, action) => {
    if (action.type === types.HOTELS) {
        return null; //action.payload;
    }
    return null; //state;
};

export default hotels;