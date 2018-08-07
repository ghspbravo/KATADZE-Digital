import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TimelineMax from 'gsap/TimelineMax'
import TweenLite from 'gsap/TweenLite'

import developImage from '../resourses/portfolio/develop.png'
import designImage from '../resourses/portfolio/design.png'
import specialProjectsImage from '../resourses/portfolio/specialProjects.png'

export default class PortfolioPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Разработка',
            features: ['Веб-сайты', 'Приложения', 'Боты', 'Плагины'],
            image: developImage,
            currentCategoryIndex: 0,
            categories: ['Разработка', 'Дизайн', 'Спецпроекты'],
            changing: false
        }
    }

    handlePortfolioChange = currentIndex => {
        if (this.state.changing) return
        TweenLite.to('img', 0.3, {
            opacity: '0', onComplete: () => {
                switch (currentIndex) {
                    case 0:
                        this.setState({
                            title: 'Разработка',
                            features: ['Веб-сайты', 'Приложения', 'Боты', 'Плагины'],
                            image: developImage,
                            currentCategoryIndex: currentIndex,
                            changing: true
                        })
                        break;
                    case 1:
                        this.setState({
                            title: 'Дизайн',
                            features: ['Логотипы', 'Интерфейсы', 'Бизнес-презентации'],
                            image: designImage,
                            currentCategoryIndex: currentIndex,
                            changing: true
                        })
                        break;
                    case 2:
                        this.setState({
                            title: 'Спецпроекты',
                            features: ['Брендинг', 'Поддержка и развитие сайтов', 'Работа с блогерами'],
                            image: specialProjectsImage,
                            currentCategoryIndex: currentIndex,
                            changing: true
                        })
                        break;

                    default:
                        return
                }
            }
        })


        let updateSection = new TimelineMax({ onComplete: () => this.setState({ changing: false }) })

        updateSection.add('start')
            .delay(0.5)
            .from('.page-container p.lead', 0.5, { rotationX: '90' })
            .to('img', 1, { opacity: '1' }, '-=0.3')
    }

    handleNextPortfolioClick = () => {
        this.handlePortfolioChange((this.state.currentCategoryIndex + 1) % 3)
    }
    handlePreviousPortfolioClick = () => {
        this.handlePortfolioChange((3 + this.state.currentCategoryIndex - 1) % 3)
    }

    componentDidMount() {
        let drawSection = new TimelineMax({ onComplete: this.props.drawEnd })

        drawSection.delay(1)
            .add('start')
            .from('.page-container p.lead', 0.5, { rotationX: '90' })
            .staggerFrom('.page-container li', 0.5, { opacity: '0', cycle: { rotationX: [-90, 90], transformOrigin: ['50% top', '50% bottom'] } })
            .from('.portfolioLink', 0.5, { opacity: '0', y: '100px' }, 'start')
            .from('.parallaxbg', 1, {opacity: '0'}, 'start')
            .add('controls')
            .from('.control-button:nth-child(1)', 0.5, { opacity: '0' })
            .from('.control-button:nth-child(2)', 0.5, { opacity: '0' }, 'controls')
            .from('.control-label:nth-child(1)', 0.5, { opacity: '0', bottom: '-100px' }, 'controls')
            .from('.control-label:nth-child(2)', 0.5, { opacity: '0', bottom: '-100px' }, 'controls')

    }

    render() {
        return (
            <div className="row page-container">
                <div className="d-none d-md-block acsentbg" style={{ position: 'absolute', fontSize: '18px', padding: '5px 10px', top: '3em', left: '5em', color: 'black' }}>Над чем работаем</div>
                <div className="offset-lg-1 col-lg-5">
                    <p className="lead">{this.state.title}</p>
                    <ul>
                        {this.state.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                </div>
                <div className="offset-lg-2 col-lg-4 parallaxbg">
                    <svg className="d-none d-lg-block" width="1000" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2393 0.5H952.953C957.586 0.5 961.758 1.60292 964.753 3.36016C967.761 5.12432 969.5 7.4888 969.5 10V35.5H0.5V10C0.5 7.3188 1.18455 4.97204 2.93536 3.28937C4.69015 1.60287 7.60238 0.5 12.2393 0.5Z" transform="translate(0.5 0.5)" stroke="#C4C4C4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M37 0C34.239 0 32 2.239 32 5C32 7.762 34.239 10 37 10C39.761 10 42 7.762 42 5C42 2.239 39.761 0 37 0ZM21 0C18.239 0 16 2.239 16 5C16 7.762 18.239 10 21 10C23.761 10 26 7.762 26 5C26 2.239 23.761 0 21 0ZM5 0C2.238 0 0 2.239 0 5C0 7.762 2.238 10 5 10C7.762 10 10 7.762 10 5C10 2.239 7.762 0 5 0Z" transform="translate(13.5 14.5)" stroke="#C2C2BC" />
                    </svg>
                    <img  className="categoryImg" src={this.state.image} alt="beauty" />
                    {/* <div className="parallaxbg" style={{
                        height: '100vh',
                        backgroundImage: `url(${this.state.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left'
                    }}></div> */}
                </div>
                <div className="portfolioLink"><Link to="/Portfolio">
                    Портфолио
                </Link></div>
                <div className="controls">
                    <div className="row">
                        <button className="col-6 control-button" onClick={this.handlePreviousPortfolioClick}>←</button>
                        <button className="col-6 control-button" onClick={this.handleNextPortfolioClick}>→</button>
                    </div>
                    <div className="row">
                        <div style={{ textAlign: 'right' }} className="control-label col-6">{this.state.categories[(3 + this.state.currentCategoryIndex - 1) % 3]}</div>
                        <div className="control-label col-6">{this.state.categories[(this.state.currentCategoryIndex + 1) % 3]}</div>
                    </div>
                </div>
            </div>
        )
    }
}
