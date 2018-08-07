import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TimelineMax from 'gsap/TimelineMax'

import bgImage from '../resourses/infoPage4.png'


export default class infoPage4 extends Component {

    componentDidMount() {
        let drawSection = new TimelineMax({onComplete: this.props.drawEnd})

        drawSection.delay(1)
            .from('.page-container h1', 0.5, { rotationX: '90' })
            .from('.page-container p', 0.3, { opacity: '0', x: '200px' })
    }
    
    render() {
        return (
            <div className="row page-container">
                <div className="col-12 offset-lg-1 col-lg-4">
                    <p>Мы работаем с крупными и малыми компаниями по всему миру и в разных часовых поясах.
                        Говорим на нескольких языках.
                        И независимо от ваших потребностей, мы с нетерпением ждем от вас обратной связи.
            </p>
                </div>
                <div className="d-none d-lg-block parallaxbg" style={{
                    position: 'fixed',
                    top: '0',
                    right: '-40%',
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left'
                }}></div>
                <Link to="/Contacts">
                    <div className="bot-hint elect col-12"><h1>Связаться с нами</h1></div>
                </Link>
            </div>
        )
    }
};
