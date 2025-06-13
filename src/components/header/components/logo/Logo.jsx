import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Picturies } from './picturies/Picturies';
import { logoName } from '../../../../utils';
import styles from './Logo.module.css';

export const Logo = () => {
	const [logoText, setLogoText] = useState('');

	const location = useLocation();

	useEffect(() => {
		const pathname = location.pathname;

		setLogoText(logoName(pathname));
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
