import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../actionTypes';
import fetchHotels from './fetchHotels';
import mockAdapter from 'axios-mock-adapter';
import {instance} from '../../services/http/httpService';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let axiosMock = new mockAdapter(instance);

describe('async fetch hotels action', () => {
   afterEach(() => {
       axiosMock.restore();
   });

   it ('emits FETCH_HOTELS_REQUEST and FETCH_HOTELS_SUCCESS actions when hotels are fetched', () => {
       const hotelData = [{name: 'hotel 1'}, {name: 'hotel 2'}, {name: 'hotel 3'}];
        axiosMock.onGet('/hotels').reply(200, hotelData);

        const expectedActions = [
            {type: actionTypes.FETCH_HOTELS_REQUEST},
            {type: actionTypes.FETCH_HOTELS_SUCCESS, payload: hotelData}
        ];

        const store = mockStore({hotels: []});

        return store.dispatch(fetchHotels(['non-smoking','executive'])).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
   });
});