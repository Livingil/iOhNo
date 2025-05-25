import { Picturies } from './picturies/Picturies';
import styles from './Logo.module.css';

export const Logo = () => {
	return (
		<div className={styles.Logo}>
			<Picturies />
			<div>iOhNo</div>
		</div>
	);
};
