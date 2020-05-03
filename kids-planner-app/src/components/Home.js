import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Home() {
	return (
		<div className='temp'>
			<h1>Welcome to Kids Day!</h1>
			<p>The only daily planning app made for kids like you!</p>

			<h2 className='home-page-header'>
				Click the{' '}
				<span className='home-span'>
					Sun <FontAwesomeIcon icon={faSun} />{' '}
				</span>
				at the top of the screen to check what the weather is like.
			</h2>
			<h2 className='home-page-header'>
				Click the{' '}
				<span className='home-span'>
					Clipboard <FontAwesomeIcon icon={faClipboardList} /> </span> at the top of the
					screen to set some reminders on things you have to do today.
				
			</h2>
			<h2 className='home-page-header'>
				If you ever need a reminder on any of that info, just click the little{' '}
				<span className='home-span'>
					House
					<FontAwesomeIcon icon={faHome} /> </span> and it'll bring you right back here.
				
			</h2>
			<h1 className='home-page-header'>Now let's get planning!</h1>
		</div>
	);
}

export default Home;
