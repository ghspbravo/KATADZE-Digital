import React, { Component } from 'react'
import TweenMax from "gsap/TweenMax";
import TimelineMax from 'gsap/TimelineMax'
import { Expo, Circ } from 'gsap/EasePack'

import LogoPage from './LogoPage'
import InfoPage1 from './InfoPage1'
import InfoPage2 from './InfoPage2'
import InfoPage3 from './InfoPage3'
import InfoPage4 from './InfoPage4'
import ClientsPage from './ClientsPage'
import PortfolioPage from './PortfolioPage'

export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSection: 0,
            touching: false,
            touchingY: 0,
            scrolling: false
        };
    };

    handleDrawEnd = () => this.setState({ scrolling: false })

    handleNextSection = () => {
        if (this.state.scrolling || this.state.currentSection === 6) return
        this.setState({ scrolling: true })
        let nextSectionTimeLine = new TimelineMax()

        nextSectionTimeLine.set('#delimiter1', { display: 'block', bottom: '-100%' })
            .to('#delimiter1', 0.5, { bottom: '0%', ease: Expo.easeOut })
            .set('#delimiter2', { display: 'block', bottom: '-100%' })
            .to('#delimiter2', 0.5, { bottom: '0%', ease: Circ.easeInOut, onComplete: this.nextSection })
            .set('#delimiter1', { display: 'none' })
            .to('#delimiter2', 1, { bottom: '100%', ease: Circ.easeInOut })
            .set('#delimiter2', { display: 'none' })
    }

    handlePreviousSection = () => {
        if (this.state.scrolling || this.state.currentSection === 0) return
        this.setState({ scrolling: true })
        let previousSectionTimeLine = new TimelineMax()

        previousSectionTimeLine.set('#delimiter1', { display: 'block', bottom: '100%' })
            .to('#delimiter1', 0.5, { bottom: '0%', ease: Expo.easeOut })
            .set('#delimiter2', { display: 'block', bottom: '100%' })
            .to('#delimiter2', 0.5, { bottom: '0%', ease: Circ.easeInOut, onComplete: this.previousSection })
            .set('#delimiter1', { display: 'none' })
            .to('#delimiter2', 1, { bottom: '-100%', ease: Circ.easeInOut })
            .set('#delimiter2', { display: 'none' })
    }

    renderCurrentComponent = index => {
        switch (index) {
            case 0: return <LogoPage drawEnd={this.handleDrawEnd}/>
            case 1: return <InfoPage1 drawEnd={this.handleDrawEnd}/>
            case 2: return <InfoPage2 drawEnd={this.handleDrawEnd}/>
            case 3: return <InfoPage3 drawEnd={this.handleDrawEnd}/>
            case 4: return <PortfolioPage drawEnd={this.handleDrawEnd}/>
            case 5: return <ClientsPage drawEnd={this.handleDrawEnd}/>
            case 6: return <InfoPage4 drawEnd={this.handleDrawEnd}/>

            default:
                break;
        }
    }

    nextSection = () => {
        this.setState({ currentSection: this.state.currentSection + 1 })
        this.props.sectionChangeHadndler(this.state.currentSection)
    }
    previousSection = () => {
        this.setState({ currentSection: this.state.currentSection - 1 })
        this.props.sectionChangeHadndler(this.state.currentSection)
    }

    componentDidMount() {

        document.getElementsByClassName('one-page-scroll')[0].onwheel = e => {
            if (this.state.scrolling) return
            e.wheelDeltaY < 0
                ? this.handleNextSection()
                : this.handlePreviousSection()
        }
        document.getElementsByClassName('one-page-scroll')[0].ontouchstart = e => {
            if (this.state.scrolling) return
            this.state.touching
                ? true
                : this.setState({ touchingY: e.changedTouches[0].clientY, touching: true })

        }
        document.getElementsByClassName('one-page-scroll')[0].ontouchend = e => {
            if (!this.state.touching) return
            this.setState({ touching: false })
            if (e.changedTouches[0].clientY === this.state.touchingY) return
            e.changedTouches[0].clientY > this.state.touchingY
                ? this.handlePreviousSection()
                : this.handleNextSection()
        }

        document.body.style.overflow = 'hidden'

        document.querySelectorAll(".onescroll-section").forEach(container => container.onmousemove = e => {
            document.querySelectorAll(".parallaxbg").forEach(element => parallaxIt(e, element))
        });

        function parallaxIt(e, target) {
            let container = document.querySelector(".page-container");
            let pageX = e.pageX - (container.style.width * 0.5);
            let pageY = e.pageY - (container.style.height * 0.5);

            TweenMax.to(target, 0.5, {
                x: (target.style.left + pageX) * 0.04,
                y: (target.style.top + pageY) * 0.04
            });
        }
    }

    componentWillUnmount() {
        this.props.sectionChangeHadndler(0)
    }

    render() {
        return (
            <div className='one-page-scroll'>
                <section className="onescroll-section">
                    {this.renderCurrentComponent(this.state.currentSection)}
                </section>
                <div id="delimiter1"></div>
                <div id="delimiter2"></div>
            </div>
        )
    }
}
