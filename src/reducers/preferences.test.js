import preferenceReducer from './preferences';
import types from '../actions/actionTypes';

describe('preferences Reducer', () => {
    it ('should return the initial state', () => {
       expect(preferenceReducer(undefined, {})).toEqual([]);
    });
});
