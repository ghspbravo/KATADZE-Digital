import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route,
	NavLink
} from 'react-router-dom'
import { Bounce, Power2 } from 'gsap/EasePack'
import TimelineMax from 'gsap/TimelineMax'

import './reset.css';
import './bootstrap-grid.min.css'
import './styles.css';

import Index from './components/Index'
import Contacts from './components/Contacts'
import Portfolio from './components/Portfolio';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentSection: 0,
			navLinksVisibility: 'visible',
		}
	}

	handleSectionChange = currentSection => {
		this.setState({ currentSection: currentSection })
		this.state.currentSection === 0
			? this.showMenu()
			: true
	}

	hideMenu = () => {
		if (this.state.navLinksVisibility === 'hidden') return
		this.setState({ navLinksVisibility: 'hidden' })
		let hideMenuTimeLine = new TimelineMax()
		let mainNav = document.getElementById('main-nav').getBoundingClientRect()
		let portfolioNav = document.getElementById('portfolio-nav').getBoundingClientRect()
		let contactsNav = document.getElementById('contacts-nav').getBoundingClientRect()

		hideMenuTimeLine.to('.navLinks', 0.3, { transform: 'rotateX(90deg)' }, '+=1')
			.to('.burger', 0.2, { opacity: '1' }, '-=0.2')
			.set('#burger-top', { top: `${mainNav.top + mainNav.height / 2}px`, left: `${mainNav.left + 15}px`, width: `${mainNav.width - 30}px`, height: '30px' })
			.set('#burger-mid', { top: `${portfolioNav.top + portfolioNav.height / 2}px`, left: `${portfolioNav.left + 15}px`, width: `${portfolioNav.width - 30}px`, height: '30px' })
			.set('#burger-bot', { top: `${contactsNav.top + contactsNav.height / 2}px`, left: `${contactsNav.left + 15}px`, width: `${contactsNav.width - 30}px`, height: '30px' })
			.add('start')
			.to('#burger-bot', 0.5, { width: '30px', left: `${contactsNav.left + contactsNav.width - 30}px` })
			.to('#burger-mid', 0.6, { width: '30px' }, 'start+=0.1')
			.to('#burger-top', 0.7, { width: '30px' }, 'start+=0.3')
			.to('#burger-bot', 0.3, { top: `${contactsNav.top}px` }, 'start+=0.1')
			.to('#burger-mid', 0.5, { left: `${contactsNav.left + contactsNav.width - 30}px`, ease: Bounce.easeOut }, 'start+=0.1')
			.to('#burger-top', 0.6, { left: `${contactsNav.left + contactsNav.width - 30}px`, ease: Bounce.easeOut }, 'start+=0.3')
			.add('up')
			.to('#burger-mid', 0.3, { top: `${contactsNav.top + 8}px` }, 'start+=0.2')
			.to('#burger-bot', 0.8, { top: '30px', ease: Power2.easeIn }, 'up')
			.to('#burger-mid', 0.8, { top: '40px', ease: Power2.easeIn }, 'up+=0.1')
			.to('#burger-top', 0.7, { top: '50px', ease: Power2.easeIn }, 'up+=0.2')
			.set('.burger', { top: '30px', left: `${contactsNav.left + contactsNav.width - 30}px`, width: '30px', height: '40px' })
	}

	showMenu = () => {
		if (this.state.navLinksVisibility === 'visible') return
		this.setState({ navLinksVisibility: 'visible' })
		let showMenuTimeLine = new TimelineMax()
		let mainNav = document.getElementById('main-nav').getBoundingClientRect()
		let portfolioNav = document.getElementById('portfolio-nav').getBoundingClientRect()
		let contactsNav = document.getElementById('contacts-nav').getBoundingClientRect()

		showMenuTimeLine.add('down')
			.to('#burger-top', 0.7, { top: `${mainNav.top + mainNav.height / 2}px`, ease: Power2.easeIn }, 'down')
			.to('#burger-mid', 0.8, { top: `${mainNav.top + mainNav.height / 2}px`, ease: Power2.easeIn }, 'down+=0.1')
			.to('#burger-bot', 0.7, { top: `${mainNav.top + mainNav.height / 2}px`, ease: Power2.easeIn }, 'down+=0.2')
			.add('left')
			.to('#burger-top', 0.5, { left: `${mainNav.left + mainNav.width - 30}px`, ease: Power2.easeOut }, '-=0.2')
			.to('#burger-mid', 0.5, { left: `${portfolioNav.left + portfolioNav.width - 30}px` }, 'left')
			.add('width')
			.to('#burger-top', 0.3, { left: `${mainNav.left + 15}px`, width: `${mainNav.width - 30}px` })
			.to('#burger-mid', 0.3, { left: `${portfolioNav.left + 15}px`, width: `${portfolioNav.width - 30}px` }, 'width')
			.to('#burger-bot', 0.3, { left: `${contactsNav.left + 15}px`, width: `${contactsNav.width - 30}px` }, 'width')
			.add('hide')
			.to('.navLinks', 0.3, { transform: 'rotateX(0deg)' }, '+=0.2')
			.set('#burger-top', { top: '0', left: '0', width: '0', height: '0' })
			.set('#burger-mid', { top: '0', left: '0', width: '0', height: '0' })
			.set('#burger-bot', { top: '0', left: '0', width: '0', height: '0' })
			.set('.burger', { top: '0', left: '0', width: '0', height: '0', opacity: '0' }, 'hide+=0.2')
	}

	showMobileMenu = () => {
		if (this.state.navLinksVisibility === 'hidden') { this.hideMobileMenu(); return }

		let showMenuTimeLine = new TimelineMax()

		showMenuTimeLine.add('start')
			.set('.mobileNavContainer', { display: 'block' })
			.to('#mobile-burger-top', 0.5, { transform: 'rotate(45deg)' })
			.to('#mobile-burger-mid', 0.5, { transform: 'rotate(-45deg)', top: '2.02rem' }, 'start')
			.to('#mobile-burger-bot', 0.5, { width: '0' }, 'start')
			.to('.mobileNavContainer', 1, { height: '160px', ease: Bounce.easeOut }, 'start')
			.to('.mobileNavContainer .col-12:nth-child(1) a', 0.2, { opacity: '1' }, 'start+=0.4')
			.to('.mobileNavContainer .col-12:nth-child(2) a', 0.2, { opacity: '1' }, 'start+=0.5')
			.to('.mobileNavContainer .col-12:nth-child(3) a', 0.2, { opacity: '1' }, 'start+=0.6')

		this.setState({ navLinksVisibility: 'hidden' })
	}

	hideMobileMenu = () => {

		let hideMenuTimeLine = new TimelineMax()

		hideMenuTimeLine.add('start')
			.to('#mobile-burger-top', 0.5, { transform: 'rotate(0deg)' })
			.to('#mobile-burger-mid', 0.5, { transform: 'rotate(0deg)', top: '2.6rem' }, 'start')
			.to('#mobile-burger-bot', 0.5, { width: '30px' }, 'start')
			.to('.mobileNavContainer', 1, { height: '0' }, 'start')
			.to('.mobileNavContainer a:nth-child(1)', 0.2, { opacity: '0' }, 'start')
			.to('.mobileNavContainer a:nth-child(2)', 0.2, { opacity: '0' }, 'start+=0.1')
			.to('.mobileNavContainer a:nth-child(3)', 0.2, { opacity: '0' }, 'start+=0.2')
			.set('.mobileNavContainer', { display: 'none' })

		this.setState({ navLinksVisibility: 'visible' })
	}

	componentDidMount() {

		window.onwheel = () => {
			if (this.state.navLinksVisibility === 'visible' && window.pageYOffset > 600
				|| this.state.navLinksVisibility === 'visible' && this.state.currentSection !== 0
				&& this.state.currentSection !== 6) this.hideMenu()
		}

		document.querySelectorAll('.mobileNavContainer a').forEach(link => link.onclick = this.hideMobileMenu)
	}

	render() {
		return (
			<Router>
				<div className="app-container">
					<Route exact path="/" render={() => <Index sectionChangeHadndler={this.handleSectionChange} />} />
					<Route path="/contacts" component={Contacts} />
					<Route path="/portfolio" component={Portfolio} />

					<div className="navbar d-none d-md-block">
						<div className="navLinks">
							<NavLink id="main-nav" className="col-lg-4" to="/">Главная</NavLink>
							<NavLink id="portfolio-nav" className="col-lg-4" to="/Portfolio">Порфтолио</NavLink>
							<NavLink id="contacts-nav" className="col-lg-4" to="/Contacts">Контакты</NavLink>
						</div>
						<button onClick={this.showMenu} className="burger">
							<svg id="burger-top" height='20px' width='118px'>
								<line x1='0' y1='10px' x2='90px' y2='10px' style={{ stroke: 'black', strokeWidth: 2 }} />
							</svg>
							<svg id="burger-mid" height='20px' width='160px'>
								<line x1='0' y1='10px' x2='130px' y2='10px' style={{ stroke: 'black', strokeWidth: 2 }} />
							</svg>
							<svg id="burger-bot" height='20px' width='160px'>
								<line x1='0' y1='10px' x2='110px' y2='10px' style={{ stroke: 'black', strokeWidth: 2 }} />
							</svg>
						</button>
					</div>
					<div className="moobileNavBar d-block d-md-none">
						<button onClick={this.showMobileMenu} className="mobileBurger">
							<svg id='mobile-burger-top' height='20px' width='30px'>
								<line x1='0' y1='10px' x2='30px' y2='10px' style={{ stroke: 'black', strokeWidth: 2 }} />
							</svg>
							<svg id='mobile-burger-mid' height='20px' width='30px'>
								<line x1='0' y1='10px' x2='30px' y2='10px' style={{ stroke: 'black', strokeWidth: 2 }} />
							</svg>
							<svg id='mobile-burger-bot' height='20px' width='30px'>
								<line x1='0' y1='10px' x2='30px' y2='10px' style={{ stroke: 'black', strokeWidth: 2 }} />
							</svg>
						</button>
						<div className="mobileNavContainer">
							<div className="row">
								<div className="col-12">
									<NavLink to="/">Главная</NavLink>
								</div>
								<div className="col-12">
									<NavLink to="/Portfolio">Порфтолио</NavLink>
								</div>
								<div className="col-12">
									<NavLink to="/Contacts">Контакты</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
