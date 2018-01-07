import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import './styles/main.less';

import App from './App.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import LoggedInLayout from './components/LoggedInLayout/LoggedInLayout.jsx';
import TaskListPage from './components/TaskListPage/TasklistPage.jsx';
import TasksPage from './components/TaskListPage/TasksPage.jsx';

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
                <Route component={LoggedInLayout} onEnter={requireAuth}>
                    <Route path='/about' component={AboutPage} />
                    <Route path='/lists' component={TaskListPage}>
                        <Route path='/lists/:id' component={TasksPage} />
                    </Route>
                </Route>
            </Route>
        </Router>,
        document.getElementById('app')
    );
}

function requireAuth(nextState, replace) {
    SessionStore
    if(!SessionStore.isLoggedIn) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}
