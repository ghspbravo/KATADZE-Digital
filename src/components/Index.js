import React, { Component } from 'react'
import { ScrollSection, ScrollContainer } from 'react-onepage-scroll'
import TweenMax from "gsap/TweenMax";

import LogoPage from './LogoPage'
import InfoPage1 from './InfoPage1'
import InfoPage2 from './InfoPage2'
import InfoPage3 from './InfoPage3'
import InfoPage4 from './InfoPage4'
import ClientsPage from './ClientsPage'
import PortfolioPage from './PortfolioPage'

export default class Index extends Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden'

        document.querySelectorAll(".page-container").forEach(container => container.onmouseover = e => {
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

    render() {
        return (
            <div className='one-page-scroll'>
                <ScrollContainer>
                    <ScrollSection pageId={0}><LogoPage /></ScrollSection>
                    <ScrollSection pageId={1}>{InfoPage1()}</ScrollSection>
                    <ScrollSection pageId={2}>{InfoPage2()}</ScrollSection>
                    <ScrollSection pageId={3}>{InfoPage3()}</ScrollSection>
                    <ScrollSection pageId={4}><PortfolioPage /></ScrollSection>
                    <ScrollSection pageId={5}>{ClientsPage()}</ScrollSection>
                    <ScrollSection pageId={6}>{InfoPage4()}</ScrollSection>
                </ScrollContainer>
            </div>
        )
    }
}
