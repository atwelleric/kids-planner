import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
	return (
		<nav>
			<h1 className="logo">Kids Day</h1>
			<ul className='nav-links'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/weather'>
					<li>Weather</li>
				</Link>
				<Link to='/todos'>
					<li>ToDos</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
