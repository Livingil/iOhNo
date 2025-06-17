import { Outlet } from 'react-router-dom';
import { HeaderInfo } from './components';
import styles from './Info.module.css';

export const InfoPage = () => {
	return (
		<div className={styles.InfoPage}>
			<HeaderInfo />
			<Outlet />
		</div>
	);
};
