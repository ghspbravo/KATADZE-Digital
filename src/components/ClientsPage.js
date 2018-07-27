import React, { Component } from 'react';
import TimelineMax from 'gsap/TimelineMax'

export default class ClientsPage extends Component {

    componentDidMount() {
        let drawSection = new TimelineMax()

        drawSection.delay(1)
            .from('.page-container h1', 0.5, { rotationX: '90' })
            .from('.page-container p', 0.3, { opacity: '0', x: '200px' })
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
                            <p>logo</p>
                        </div>
                        <div className="col-6 col-lg-4">
                            <p>logo</p>
                        </div>
                        <div className="col-6 col-lg-4">
                            <p>logo</p>
                        </div>
                        <div className="col-6 col-lg-4">
                            <p>logo</p>
                        </div>
                        <div className="col-6 col-lg-4">
                            <p>logo</p>
                        </div>
                        <div className="col-6 col-lg-4">
                            <p>logo</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
