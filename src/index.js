import React from 'react';
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {persistState} from './initialize/localStorage';
import configureStore from './store/configureStore';
import 'typeface-roboto';
import Root from './initialize/Root';
import throttle from 'lodash.throttle';

const store = configureStore();

store.subscribe(throttle(() => {
    persistState({
        hotels: store.getState().hotels
    });
}, 1000));

render(
    <Root store={store}/>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
