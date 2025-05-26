import { useEffect, useState } from 'react';
import { City, Temperature, Sky } from './components';
import styles from './Weather.module.css';

export const Weather = () => {
	const [city, setCiy] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');
	const [weatherSky, setWeatherSky] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Severodvinsk&units=metric&lang=ru&appid=592b40a32ebbb356bcabefd39ea0802f',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCiy(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
				setWeatherSky(weather[0].id);
			});
	}, []);
	return (
		<div className={styles.WeatherContainer}>
			<City city={city} />
			<Temperature temperature={temperature} />
			<Sky weather={weather} weatherSky={weatherSky} />
		</div>
	);
};
