import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom'

import './reset.css';
import './bootstrap-grid.min.css'
import './styles.css';

// import Main from './components/Main'
import Index from './components/Index'
import Contacts from './components/Contacts'
import Portfolio from './components/Portfolio';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app-container">
					<Route exact path="/" component={Index} />
					<Route path="/contacts" component={Contacts} />
					<Route path="/portfolio" component={Portfolio} />

					<div className="navbar container">
						<div className="row">
							<NavLink className="offset-lg-6 col-lg-2" to="/">Главная</NavLink>
							<NavLink className="col-lg-2" to="/Portfolio">Порфтолио</NavLink>
							<NavLink className="col-lg-2" to="/Contacts">Контакты</NavLink>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
