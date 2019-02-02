import sortOrderReducer from './sortOrder';
import types from '../actions/actionTypes';

describe('sortOrder Reducer', () => {
    it ('should return the initial state', () => {
       expect(sortOrderReducer(undefined, {})).toEqual('asc');
    });

    it ('should return the sort order', () => {
        const action = {type: types.SORT_ORDER_CHANGED, payload: 'desc'};
        expect(sortOrderReducer('asc', action)).toEqual('desc');
    });
});
