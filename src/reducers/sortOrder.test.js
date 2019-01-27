import sortOrderReducer from './sortOrder';

describe('sortOrder Reducer', () => {
    it ('should return the initial state', () => {
       expect(sortOrderReducer(undefined, {})).toEqual('asc');
    });
});
