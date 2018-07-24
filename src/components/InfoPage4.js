import React from 'react'
import { Link } from 'react-router-dom'

import bgImage from '../resourses/infoPage4.png'

export default () => {
    return (
        <div className="row page-container">
            <div className="col-12 offset-lg-1 col-lg-4">
                <p>Мы работаем с крупными и малыми компаниями по всему миру и в разных часовых поясах.
                    Говорим на нескольких языках.
                    И независимо от ваших потребностей, мы с нетерпением ждем от вас обратной связи.
                </p>
            </div>
            <div className="d-none d-lg-block offset-lg-1 col-lg-5 parallaxbg" style={{
                height: '500px',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'
            }}></div>
            <Link to="/Contacts">
                <div className="bot-hint elect col-12"><h1>Связаться с нами</h1></div>
            </Link>
        </div>
    )
}
