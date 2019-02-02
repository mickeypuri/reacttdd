import types from '../actions/actionTypes';
import {includes, without} from 'ramda';

const initialState = [];

const preferences = (state = initialState, action) => {
    if (action.type === types.PREFERENCES) {
        const {payload} = action;
        if (payload.isChecked) {
            return [...state, payload.preference];
        }
        return without(payload.preference, state);
    }
    return state;
};

export default preferences;