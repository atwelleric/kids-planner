import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const [temp, setTemp] = useState(null);
	const url =
		'https://api.openweathermap.org/data/2.5/weather?zip=48435,us&appid=14e1a13d6e2a61d1b6676274331bbe74&units=imperial';
	useEffect(() => {
		axios(url)
			.then((response) => {
				setWeatherData('snow');
				setTemp(2);
			})
			.catch(console.error);
	}, [url]);
	console.log(weatherData);
	console.log(temp);
	if (!weatherData) {
		return null;
	}

	let tempDescritpion = '';
	if (temp >= 85) {
		tempDescritpion = `It's ${temp} F outside! That's pretty hot, drink lots of water and stay in the shade!`;
	} else if (temp >= 70 && temp <= 84) {
		tempDescritpion = `It's ${temp} F outside! That's a pretty nice!`;
	} else if (temp >= 50 && temp <= 69) {
		tempDescritpion = `It's ${temp} F outside! Might start to get chilly, long sleeve and sweater kind of day`;
	} else if (temp >= 32 && temp <= 49) {
		tempDescritpion = `It's ${temp} F outside! Thats pretty cold. Don't forget the hat, gloves, scarf, and a warm jacket!`;
	} else {
		tempDescritpion = `It's ${temp}F outside! That's really really cold! Dress as warm as you can if you have to go outside!`;
	}

	if (weatherData.includes('rain')) {
		return (
			<>
				<h1 className='temp'>{tempDescritpion}</h1>
				<p className='rain'>
					
				</p>
				<h2>Looks like it might rain today, don't forget your rain gear!</h2>
			</>
		);
	} else if (weatherData.includes('snow')) {
		return (
			<>
				<h1 className='temp'>{tempDescritpion}</h1>
				<p className='snow'> </p>
				<h2>
					Looks like it's going to snow today! Don't forget your snow gear!
				</h2>
			</>
		);
	} else if (weatherData.includes('cloud')) {
		return (
			<>
				<h1 className='temp'>{tempDescritpion}</h1>
				<p className='clouds'> </p>
				<h2>
					Looks like it's going to be cloudy, maybe you should bring a sweater
					just in case!
				</h2>
			</>
		);
	}

}



export default Weather;
