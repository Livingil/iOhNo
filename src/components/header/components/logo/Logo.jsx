import { Link, useLocation } from 'react-router-dom';
import { Picturies } from './picturies/Picturies';
import styles from './Logo.module.css';
import { useEffect, useState } from 'react';

export const Logo = () => {
	const [logoText, setLogoText] = useState('');

	const location = useLocation();

	useEffect(() => {
		const pathname = location.pathname;

		switch (pathname) {
			case '/':
				setLogoText('');
				break;
			case '/notes':
				setLogoText('Notes');
				break;
			default:
				setLogoText('Неизвестная страница');
		}
	}, [location.pathname]);

	return (
		<div className={styles.Logo}>
			<Link className={styles.picturiesText} to="/">
				<Picturies />
				<div>iOhNo</div>
			</Link>
			<div className={styles.adresName}>{logoText}</div>
		</div>
	);
};
