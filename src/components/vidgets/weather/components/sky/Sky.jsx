/* eslint-disable react/prop-types */
import { IconSky } from './IconSky';
import styles from './Sky.module.css';

export const Sky = ({ weather, weatherSky }) => {
	const newWeather = weather.charAt(0).toUpperCase() + weather.slice(1);
	return (
		<div className={styles.Sky}>
			<div className={styles.top}>{newWeather}</div>
			<div className={styles.back}>
				<IconSky weatherSky={weatherSky} />
			</div>
		</div>
	);
};
