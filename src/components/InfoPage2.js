import React, { Component } from 'react';
import TimelineMax from 'gsap/TimelineMax'

import bgImage from '../resourses/infoPage2.png'

export default class infoPage2 extends Component {

    componentDidMount() {
        let drawSection = new TimelineMax({onComplete: this.props.drawEnd})

        drawSection.delay(1)
        .from('.page-container p.lead', 0.3, { opacity: '0', x: '-200px' })
        .from('.hint p', 0.5, { opacity: '0', y: '200px' })
    }

    render() {
        return (
            <div className="row page-container">
                <div className="d-none d-lg-block parallaxbg" style={{
                    position: 'fixed',
                    top: '0',
                    right: '3%',
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left'
                }}></div>
                <div className="col-12 offset-lg-7 col-lg-4">
                    <p className="lead">Мы просто делаем свою работу добросовестно.
                                Искренне переживаем за ваше дело и стараемся помочь.</p>
                </div>
                <div className="col-12 offset-lg-7 col-lg-4 hint" style={{ position: 'absolute', bottom: '5%' }}><p>
                    Ищем смысл, анализируя, заботимся об эстетике, отсекая лишнее, вдохновляем на изменения
        </p></div>
            </div>
        )
    }
};
