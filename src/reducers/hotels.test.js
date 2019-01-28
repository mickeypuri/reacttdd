import hotelsReducer from './hotels';
import types from '../actions/actionTypes';

describe('hotels Reducer', () => {
    it ('should return the initial state', () => {
       expect(hotelsReducer(undefined, {})).toEqual([]);
    });

    it ('should return the correct preferences', () => {
        const action = {
            type: types.FETCH_HOTELS_SUCCESS,
            payload: [{name: 'hotel 1'}, {name: 'hotel 2'}]
        };
        expect(hotelsReducer([{name: 'hotel 3'}], action)).toEqual(action.payload);
    });
});
