import types from '../actions/actionTypes';

const initialState = [];

const preferences = (state = initialState, action) => {
    if (action.type === types.PREFERENCES) {
        return action.payload;
    }
    return state;
};

export default preferences;