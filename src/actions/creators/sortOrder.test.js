import sortOrderCreator from './sortOrder';
import types from '../actionTypes';

describe('sortOrder action creator', () => {
   it ('should create an action for sort order', () => {
       const order = 'desc';
       const action = sortOrderCreator(order);
       expect(action.type).toEqual(types.SORT_ORDER_CHANGED);
       expect(action.payload).toEqual(order);
   }) ;
});