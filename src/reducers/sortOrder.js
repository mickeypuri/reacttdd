import types from '../actions/actionTypes';

const initialState = 'asc';

const sortOrder = (state = initialState, action) => {
    if (action.type === types.SORT_ORDER_CHANGED) {
        return action.payload;
    }
    return state;
};

export default sortOrder;
