import types from '../actions/actionTypes';
import {sortWith, ascend, descend, prop} from 'ramda';

const initialState = [];

const hotels = (state = initialState, action) => {
    if (action.type === types.FETCH_HOTELS_SUCCESS) {
        return action.payload;
    }
    if (action.type = types.SORT_ORDER_CHANGED) {
        const sorter = action.payload === 'asc' ? sortWith([ascend(prop('name'))]) : sortWith([descend(prop('name'))]);
        return sorter(state);
    }
    return state;
};

export default hotels;