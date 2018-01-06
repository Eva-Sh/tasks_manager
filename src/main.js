import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './styles/main.less';

import App from './App.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import LoggedInLayout from './components/LoggedInLayout/LoggedInLayout.jsx'

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
                <Route component={LoggedInLayout}>
                    <Route path='/about' component={AboutPage} />
                </Route>
            </Route>
        </Router>,
        document.getElementById('app')
    );
}
