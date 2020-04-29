import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rain from '../images/rain.png';

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const url =
		'https://api.openweathermap.org/data/2.5/weather?zip=48435,us&appid=14e1a13d6e2a61d1b6676274331bbe74&units=imperial';
	useEffect(() => {
		axios(url)
			.then((response) => {
				setWeatherData(response.data);
			})
			.catch(console.error);
	}, [url]);
	console.log(weatherData);
	if (!weatherData) {
		return null;
	}

	return (
		<>
			{weatherData.weather[0].description === 'light rain' ? (
				<div className='rain'>
					<h1>{Math.round(weatherData.main.temp)} F</h1>
					<h1>{weatherData.weather[0].description}</h1>
				</div>
			) : (
				<div className='clear'>
					<h1>{Math.round(weatherData.main.temp)} F</h1>
					<h1>{weatherData.weather[0].description}</h1>
				</div>
			)}
		</>
	);
}

export default Weather;
