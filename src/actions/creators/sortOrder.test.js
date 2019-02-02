import sortOrderCreator from './sortOrder';
import types from '../actionTypes';

describe('sortOrder action creator', (order) => {
   it ('should create an action for sort order', () => {
       const action = sortOrderCreator();
       expect(action.type).toEqual(types.SORT_ORDER_CHANGED);
       expect(action.payload).toEqual(order);
   }) ;
});