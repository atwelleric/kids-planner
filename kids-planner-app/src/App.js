import React from 'react';
import Home from './components/Home';
import Weather from './components/Weather';
import ToDos from './components/ToDos';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


function App() {
	return (
		<div>
			<Router>
				<Nav />
				
				<Route path='/' exact component={Home} />
				<Route path='/weather/' component={Weather} />
				<Route path='/todos/' component={ToDos} />
			</Router>
		</div>
	);
}

export default App;
