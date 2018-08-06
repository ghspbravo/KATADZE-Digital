import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TimelineMax from 'gsap/TimelineMax'
import { Back } from 'gsap/EasePack'

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
        
        let updateSection = new TimelineMax({onComplete: () => this.setState({changing: false})})

        updateSection.add('start')
            .from('.page-container p.lead', 0.5, { rotationX: '90' })
            .staggerFrom('.page-container li', 0.5, { opacity: '0', cycle: { rotationX: [-90, 90], transformOrigin: ['50% top', '50% bottom'] } })
            .from('.categoryLetter', 0.5, { fontSize: '0', ease: Back.easeOut.config(3) }, 'start+=0.2')        
    }

    handleNextPortfolioClick = () => {
        this.handlePortfolioChange((this.state.currentCategoryIndex + 1) % 3)
    }
    handlePreviousPortfolioClick = () => {
        this.handlePortfolioChange((3 + this.state.currentCategoryIndex - 1) % 3)
    }

    componentDidMount() {
        let drawSection = new TimelineMax({onComplete: this.props.drawEnd})

        drawSection.delay(1)
            .add('start')
            .from('.page-container p.lead', 0.5, { rotationX: '90' })
            .staggerFrom('.page-container li', 0.5, { opacity: '0', cycle: { rotationX: [-90, 90], transformOrigin: ['50% top', '50% bottom'] } })
            .from('.portfolioLink', 0.5, { opacity: '0', y: '100px' }, 'start')
            .from('.categoryLetter', 0.5, { fontSize: '0', ease: Back.easeOut.config(3) }, 'start+=0.2')
            .add('controls')
            .from('.control-button:nth-child(1)', 0.5, { opacity: '0', x: '200px' })
            .from('.control-button:nth-child(2)', 0.5, { opacity: '0', x: '-200px' }, 'controls')
            .from('.control-label:nth-child(1)', 0.5, { opacity: '0', x: '200px' }, 'controls')
            .from('.control-label:nth-child(2)', 0.5, { opacity: '0', x: '200px' }, 'controls')

    }

    render() {
        return (
            <div className="row page-container">
                <div className="d-none d-md-block mainbg" style={{ position: 'absolute', fontSize: '18px', padding: '5px 10px', top: '3em', left: '5em', color: 'white' }}>Над чем работаем</div>
                <div className="offset-lg-1 col-lg-5">
                    <p className="lead">{this.state.title}</p>
                    <ul>
                        {this.state.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                </div>
                <div className="categoryLetter">{this.state.title[0]}</div>
                <div className="d-none d-lg-block col-lg-6 mainbg">
                    <div className="parallaxbg" style={{
                        height: '100vh',
                        backgroundImage: `url(${this.state.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left'
                    }}></div>
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
