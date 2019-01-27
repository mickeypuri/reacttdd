import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import {loadState} from '../initialize/localStorage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const configureStore = () => {
    const persistedState = loadState();
    let middleWares = [thunk];

    if (process.env.NODE_ENV === 'development') {
        middleWares.concat([reduxImmutableStateInvariant(), logger]);
    }

    const composeEnhancers = composeWithDevTools({});
    const enhancer = process.env.NODE_ENV === 'development' ? composeEnhancers(applyMiddleware(...middleWares)) : applyMiddleware(...middleWares);

    return createStore(
        rootReducer,
        persistedState,
        enhancer
    );
};

export default configureStore;