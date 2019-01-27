import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from "../components/app/App";

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/dashboard" render={()=><h1>Dashboard</h1>}/>
                <Route path="/" exact component={App} />
                <Route render={()=><h1>404 - Not found</h1>} />
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;