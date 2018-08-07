import React, { Component } from 'react';
import TimelineMax from 'gsap/TimelineMax'

import client1 from '../resourses/clients/1.png'
import client2 from '../resourses/clients/2.png'
import client3 from '../resourses/clients/3.png'
import client4 from '../resourses/clients/4.png'
import client5 from '../resourses/clients/5.png'
import client6 from '../resourses/clients/6.png'


export default class ClientsPage extends Component {

    componentDidMount() {
        let drawSection = new TimelineMax({ onComplete: this.props.drawEnd })

        drawSection.delay(1)
            .from('.page-container h2', 0.5, { rotationX: '90' })
            .from('.page-container p', 0.3, { bottom: '-100px', opacity: '0' }, '-=0.2')
            .from('.clientsLogo>div', 1, { opacity: '0' })
            .from('.page-container img', 0.5, { rotationX: '90' }, '-=0.8')
    }

    render() {
        return (
            <div className="row page-container justify-center">
                <div>
                    <div className="col-12 text-center">
                        <h2>Наши клиенты</h2>
                        <p>Некоторых вы не знаете, но скоро это изменится.</p>
                    </div>
                    <div className="col-12" style={{ marginTop: '100px' }}>
                        <div className="container">
                            <div className="row clientsLogo">
                                <div className="col-6 col-lg-4">
                                    <img src={client1} alt="client" />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <img src={client2} alt="client" />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <img src={client3} alt="client" />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <img src={client4} alt="client" />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <img src={client5} alt="client" />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <img src={client6} alt="client" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
