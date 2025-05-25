import { useEffect, useState } from 'react';
import { LogoDate } from './components';
import styles from './Weather.module.css';

export const Weather = () => {
	const [city, setCiy] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Severodvinsk&units=metric&lang=ru&appid=592b40a32ebbb356bcabefd39ea0802f',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCiy(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);
	return (
		<div className={styles.WeatherContainer}>
			<LogoDate />
			<div className={styles.City}>{city}</div>
			<div className={styles.Temperature}>
				{temperature} градусов, {weather}
			</div>
		</div>
	);
};
