import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Weather() {
	const [weatherData, setWeatherData] = useState(null);
	const url =
		'https://api.openweathermap.org/data/2.5/weather?zip=48435,us&appid=14e1a13d6e2a61d1b6676274331bbe74&units=imperial';
	useEffect(() => {
		axios(url)
			.then((response) => {
				setWeatherData('rain');
			})
			.catch(console.error);
	}, [url]);
	console.log(weatherData);
	if (!weatherData) {
		return null;
	}

	if (weatherData.includes('rain')) {
		return (
			<>
				<h1>Temp = 70F</h1>
				<p className='rain'>
					{/* <h1>{Math.round(weatherData.main.temp)} F</h1>
				<h1>{weatherData.weather[0].description}</h1> */}
				</p>
				<h2>Looks like it might rain today, don't forget your rain gear!</h2>
			</>
		);
		// } else if (weatherData.weather[0].description.includes('cloud')) {
		// 	return (
		// 		<div className='cloud'>
		// 			<h1>clouds</h1>
		// 			<h1>{Math.round(weatherData.main.temp)} F</h1>
		// 		</div>
		// 	);
		// } else if (weatherData.weather[0].description.includes('snow')) {
		// 	return (
		// 		<div className='snow'>
		// 			<h1>Snow</h1>
		// 			<h1>{Math.round(weatherData.main.temp)} F</h1>
		// 		</div>
		// 	);
		// } else {
		// 	return (
		// 		<div className='clear'>
		// 			<h1>clear</h1>
		// 			<h1>{Math.round(weatherData.main.temp)} F</h1>
		// 		</div>
		// 	);
	}

	// return (
	// 	<>
	// 		{weatherData.weather[0].description.includes('rain') ? (
	// 			<div className='rain'>
	// 				<h1>Rain</h1>
	// 				<h1>{Math.round(weatherData.main.temp)} F</h1>
	// 				<h1>{weatherData.weather[0].description}</h1>
	// 			</div>
	// 		) : (
	// 			<div className='clear'>
	// 				<h1>{Math.round(weatherData.main.temp)} F</h1>
	// 				<h1>{weatherData.weather[0].description}</h1>
	// 			</div>
	// 		)}
	// 	</>
	// );
}

export default Weather;
