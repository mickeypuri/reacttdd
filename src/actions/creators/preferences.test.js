import preferencesCreator from './preferences';
import types from '../actionTypes';

describe('preferences action creator', () => {
   it ('should create an action for preferences', () => {
       const payload = {preference: 'smoking', isChecked: true};
       const action = preferencesCreator('smoking', true);

       expect(action.type).toEqual(types.PREFERENCES);
       expect(action.payload.preference).toEqual('smoking');
       expect(action.payload.isChecked).toEqual(true);
   }) ;
});