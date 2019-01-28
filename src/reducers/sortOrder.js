import types from '../actions/actionTypes';

const initialState = 'asc';

const sortOrder = (state = initialState, action) => {
    if (action.type === types.SORT_ORDER_CHANGED) {
        return state === 'asc'? 'desc' : 'asc';
    }
    return state;
};

export default sortOrder;
