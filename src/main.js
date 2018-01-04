import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './stylemain.less';

import App from './app';
import LoginPage from './components/LoginPage/LoginPage';
import AboutPage from './components/AboutPage';

render(
    <Router history={ hashHistory }>
        <Route path='/' component={App}>
            <Route path='/login' component={LoginPage} />
        </Route>
    </Router>,
    document.getElementById('app')
);