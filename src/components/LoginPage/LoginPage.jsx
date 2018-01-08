import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

import './style.less';

const LoginPage = React.createClass({
    render() {
        return (
            <div className='login-page'>
                <div className='login-page__container'>
                    <div className='login-page__text'>
                        <h1 className='login-page__title'>Менеджер задач</h1>
                        <p className='login-page__description'>Ваш ежедневник</p>
                        <RaisedButton
                            className='login-page__button'
                            label='Войти'
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
    }
});

export default LoginPage;
