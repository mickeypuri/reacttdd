import preferencesCreator from './preferences';
import types from '../actionTypes';

describe('preferences action creator', () => {
   it ('should create an action for preferences', () => {
       const payload = ['non-smoking', 'twin'];
       const action = preferencesCreator(payload);

       expect(action.type).toEqual(types.PREFERENCES);
       expect(action.payload).toEqual(payload);
   }) ;
});