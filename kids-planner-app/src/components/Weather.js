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
				console.log(response);
				setWeatherData(response.data.weather[0].description);
				setTemp(Math.round(response.data.main.temp));
			})
			.catch(console.error);
	}, [url]);

	if (!weatherData || !temp) {
		return null;
	}

	let tempDescritpion = '';
	if (temp >= 85) {
		tempDescritpion = `It's ${temp} F outside! That's pretty hot, drink lots of water and stay in the shade!`;
	} else if (temp >= 70 && temp <= 84) {
		tempDescritpion = `It's ${temp} F outside! That's pretty nice!`;
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
				<h1 className='temp'>Temp = 70F</h1>
				<p className='rain'>
					{/* <h1>{Math.round(weatherData.main.temp)} F</h1>
				<h1>{weatherData.weather[0].description}</h1> */}
				</p>
				<h2 className='weatherDescription'>
					Looks like it might rain today, don't forget your rain gear!
				</h2>
			</>
		);
	} else if (weatherData.includes('snow')) {
		return (
			<>
				<h1 className='temp'>{tempDescritpion}</h1>
				<p className='snow'> </p>
				<h2 className='weatherDescription'>
					Looks like it's going to snow today! Don't forget your snow gear!
				</h2>
			</>
		);
	} else if (weatherData.includes('cloud')) {
		return (
			<>
				<h1 className='temp'>{tempDescritpion}</h1>
				<p className='clouds'> </p>
				<h2 className='weatherDescription'>
					Looks like it's going to be cloudy, maybe you should bring a sweater
					just in case!
				</h2>
			</>
		);
	} else {
		return (
			<>
				<h1 className='temp'>{tempDescritpion}</h1>
				<p className='clear'> </p>
				<h2 className='weatherDescription'>
					Clear sky's right now! The sun is shining!
				</h2>
			</>
		);
	}
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

export default Weather;
