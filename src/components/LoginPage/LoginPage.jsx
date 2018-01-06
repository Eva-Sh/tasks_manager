import React from 'react';

import SessionStore from '../../stores/SessionStore';
import SessionActions from '../../actions/SessionActions';

import RaisedButton from 'material-ui/lib/raised-button';

import './StyleLoginPage.less';

function getStateFromFlux() {
    return {
        isLoggedIn: SessionStore.isLoggedIn()
    };
}

const LoginPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return getStateFromFlux();
    },

    componentDidMount() {
        SessionStore.addChangeListener(this._onChange);
    },

    componentWillUpdate(nextProps, nextState) {
        if (nextState.isLoggedIn) {
           const { location } = this.props

            if(location.state && location.state.nextPathname) {
               this.context.router.replace(location.state.nextPathname);
            } else {
               this.context.router.replace('/lists');
            }
        }
    },

    componentWillUnmount() {
        SessionStore.removeChangeListener(this._onChange);
    },

    handleLogIn() {
        SessionActions.authorize();
    },

    render() {
        return (
            <div className='login-page'>
                <div className='login-page__container'>
                    <div className='login-page__text'>
                        <h1 className='login-page__title'>Task Manager</h1>
                        <p className='login-page__description'>Your organizer</p>
                        <RaisedButton
                            className='login-page__button'
                            label='Log in with Google'
                            onClick={this.handleLogIn}
                        />
                    </div>
                    <img
                        src='/img/note.png'
                        className='login-page__image'
                    />
                </div>
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default LoginPage;
