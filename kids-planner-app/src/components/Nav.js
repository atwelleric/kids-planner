import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Nav() {
	return (
		<nav>
			<h1 className='logo'>Kids Day</h1>
			<ul className='nav-links'>
				<Link to='/'>
					<li>
						<FontAwesomeIcon icon={faHome} />
					</li>
				</Link>
				<Link to='/weather'>
					<li>
						<FontAwesomeIcon icon={faSun} />
					</li>
				</Link>
				<Link to='/todos'>
					<li>
						<FontAwesomeIcon icon={faClipboardList} />
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
