import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
            categories: ['Разработка', 'Дизайн', 'Спецпроекты']
        }
    }

    handlePortfolioChange = currentIndex => {
        switch (currentIndex) {
            case 0:
                this.setState({
                    title: 'Разработка',
                    features: ['Веб-сайты', 'Приложения', 'Боты', 'Плагины'],
                    image: developImage,
                    currentCategoryIndex: currentIndex
                })
                break;
            case 1:
                this.setState({
                    title: 'Дизайн',
                    features: ['Логотипы', 'Интерфейсы', 'Бизнес-презентации'],
                    image: designImage,
                    currentCategoryIndex: currentIndex
                })
                break;
            case 2:
                this.setState({
                    title: 'Спецпроекты',
                    features: ['Брендинг', 'Поддержка и развитие сайтов', 'Работа с блогерами'],
                    image: specialProjectsImage,
                    currentCategoryIndex: currentIndex
                })
                break;

            default:
                break;
        }
    }

    handleNextPortfolioClick = () => {
        this.handlePortfolioChange((this.state.currentCategoryIndex + 1) % 3)
    }
    handlePreviousPortfolioClick = () => {
        this.handlePortfolioChange((3 + this.state.currentCategoryIndex - 1) % 3)
    }

    render() {
        return (
            <div className="row page-container">
                <div className="mainbg" style={{ position: 'absolute', fontSize: '18px', padding: '5px 10px', top: '3em', left: '5em', color: 'white' }}>Над чем работаем</div>
                <div className="offset-lg-1 col-lg-5">
                    <p className="lead">{this.state.title}</p>
                    <ul>
                        {this.state.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                </div>
                <div className="categoryLetter">{this.state.title[0]}</div>
                <div className="col-lg-6 mainbg">
                    <div className="parallaxbg" style={{
                        height: '100vh',
                        backgroundImage: `url(${this.state.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left'
                    }}></div>
                </div>
                <div style={{
                    position: 'absolute', fontSize: '18px', bottom: '7em',
                    left: '5em', textTransform: 'uppercase', paddingBottom: '10px',
                    fontWeight: '100', borderBottom: '1px solid #67CAE8'
                }}><Link to="/Portfolio">
                    Портфолио
                </Link></div>
                <div className="controls">
                    <div className="row">
                        <button className="control-button" onClick={this.handlePreviousPortfolioClick}>←</button>
                        <button className="control-button" onClick={this.handleNextPortfolioClick}>→</button>
                    </div>
                    <div className="row">
                        <div style={{ textAlign: 'right' }} className="col-lg-6">{this.state.categories[(3 + this.state.currentCategoryIndex - 1) % 3]}</div>
                        <div style={{ color: 'white' }} className="col-lg-6">{this.state.categories[(this.state.currentCategoryIndex + 1) % 3]}</div>
                    </div>
                </div>
            </div>
        )
    }
}
