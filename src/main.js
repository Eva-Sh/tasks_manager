import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './styles/main.less';

import App from './app';
import LoginPage from './components/LoginPage/LoginPage';
import AboutPage from './components/AboutPage';

import SessionActions from './actions/SessionActions';
import SessionStore from './stores/SessionStore';

window.handleGoogleApiLoaded = () => {
    SessionActions.authorize(true, renderApp);
};

function renderApp() {
    ReactDOM.render(
        <Router history={ hashHistory }>
            <Route path='/' component={App}>
                <Route path='/login' component={LoginPage} />
            </Route>
        </Router>,
        document.getElementById('app')
    );
}
