import hotelsRequestCreator from './hotelsRequest';
import types from '../actionTypes';

describe('sortOrder action creator', () => {
   it ('should create an action for sort order', () => {
       const action = hotelsRequestCreator();
       expect(action.type).toEqual(types.FETCH_HOTELS_REQUEST);
   }) ;
});