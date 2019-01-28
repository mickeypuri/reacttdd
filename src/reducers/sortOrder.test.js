import sortOrderReducer from './sortOrder';
import types from '../actions/actionTypes';

describe('sortOrder Reducer', () => {
    it ('should return the initial state', () => {
       expect(sortOrderReducer(undefined, {})).toEqual('asc');
    });

    it ('should return the opposite state', () => {
        const action = {type: types.SORT_ORDER_CHANGED};
        expect(sortOrderReducer('asc', action)).toEqual('desc');
    });

    it ('should return the opposite state', () => {
        const action = {type: types.SORT_ORDER_CHANGED};
        expect(sortOrderReducer('desc', action)).toEqual('asc');
    });
});
