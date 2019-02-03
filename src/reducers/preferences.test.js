import preferenceReducer from './preferences';
import types from '../actions/actionTypes';

describe('preferences Reducer', () => {
    it ('should return the initial state', () => {
       expect(preferenceReducer(undefined, {})).toEqual([]);
    });

    it ('should return the correct preferences', () => {
        const action = {
            type: types.PREFERENCES,
            payload: {preference: 'non-smoking', isChecked: true}
        };
        expect(preferenceReducer(['single'], action)).toEqual(['single', 'non-smoking']);
    });
});
