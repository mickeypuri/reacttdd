import {combineReducers} from 'redux';
import hotels from './hotels';
import preferences from './preferences';
import sortOrder from './sortOrder';

const rootReducer = combineReducers({
    preferences,
    sortOrder,
    hotels
});

export default rootReducer;