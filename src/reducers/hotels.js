import types from '../actions/actionTypes';

const initialState = [];

const hotels = (state = initialState, action) => {
    if (action.type === types.HOTELS) {
        return action.payload;
    }
    return state;
};

export default hotels;