import { Link } from 'react-router-dom';
import { Picturies } from './picturies/Picturies';
import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<Link className={styles.Logo} to="/">
			<Picturies />
			<div>iOhNo</div>
		</Link>
	);
};
