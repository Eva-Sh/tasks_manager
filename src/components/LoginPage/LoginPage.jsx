import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

import './StyleLoginPage.less';


const LoginPage = React.createClass({
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
                            onClick={this.props.onLogIn}
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
