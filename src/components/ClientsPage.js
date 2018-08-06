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
            .from('.page-container h1', 0.5, { rotationX: '90' })
            .from('.page-container img', 0.5, { rotationX: '90' })
    }

    render() {
        return (
            <div className="row page-container">
                <div className="col-12 col-md-6 offset-lg-1 col-lg-4">
                    <h1>Клиенты</h1>
                    <p>Большинство наших клиентов - это стартапы,
                        поэтому о некоторых из них вы еще не слышали,
                но скоро это изменится.</p>
                </div>
                <div className="col-12 col-md-6 offset-lg-1 col-lg-5 clients-box">
                    <div className="row">
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
        )
    }
};
