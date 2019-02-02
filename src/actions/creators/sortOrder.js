import types from '../actionTypes';

const sortOrder = (order) => ({type: types.SORT_ORDER_CHANGED, payload: order});

export default sortOrder;