import React, { Component } from 'react';
import TimelineMax from 'gsap/TimelineMax'

import bgImage from '../resourses/infoPage3.png'


export default class infoPage3 extends Component {

    componentDidMount() {
        let drawSection = new TimelineMax()

        drawSection.delay(1)
            .from('.page-container h1', 0.5, { rotationX: '90' })
            .from('.page-container p', 0.3, { opacity: '0', x: '200px' })
    }

    render() {
        return (
            <div className="row page-container">
                <div className="col-12 offset-lg-1 col-lg-5">
                    <h1>В чем сила ?</h1>
                    <p>Мы ставим пользовательский опыт превыше всего —
                        и тестируем десятки гипотез перед тем, как предложить клиенту первую концепцию.
                Идея становится интерактивным прототипом, а затем готовым продуктом.</p>
                </div>
                <div className="d-none d-lg-block col-lg-5 parallaxbg" style={{
                    height: '500px',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right'
                }}></div>
            </div>
        )
    }
};
