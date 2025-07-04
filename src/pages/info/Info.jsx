import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { HeaderInfo } from './components';
import { selectUser } from '../../redux/selectors';
import styles from './Info.module.css';
import { ROLE } from '../../constans';
import { PrivateContent } from '../../components';

export const InfoPage = () => {
	const user = useSelector(selectUser);

	if (user.role === ROLE.GUEST) {
		return <PrivateContent />;
	}

	return (
		<div className={styles.InfoPage}>
			<HeaderInfo />
			<Outlet />
		</div>
	);
};
