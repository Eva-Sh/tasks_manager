import React, { Component }  from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import SessionActions from '../../actions/SessionActions';

import './StyleLoginPage.less';


class LoginPage extends Component {

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
        )
    }
    handleLogIn() {
        SessionActions.authorize();
    }

}

export default LoginPage;