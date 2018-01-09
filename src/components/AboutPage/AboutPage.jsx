import React from 'react';
import { Link } from 'react-router';

import './style.less';

const AboutPage = React.createClass({
    render() {
        return (
            <div className='about-page'>
                <div className='about-page__container'>
                    <h1 className='about-page__title'>О менеджере задач</h1>
                    <p className='about-page__text'>Информация о менеджере задач</p>
                    <img
                        src='/img/note.png'
                        className='about-page__image'
                    />
                </div>
            </div>
        );
    }
});

export default AboutPage;
