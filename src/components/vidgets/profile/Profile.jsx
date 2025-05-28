import { Link } from 'react-router-dom';
import { Icon } from '../../icon/Icon';
import styles from './Profile.module.css';

export const Profile = () => {
	return (
		<Link to="/profile" className={styles.Profile}>
			<div className={styles.logo}>
				<Icon id="fa-user-circle" />
			</div>
			<div className={styles.infoPanel}>
				<h1>Name</h1>
				<div>Email</div>
			</div>
		</Link>
	);
};
