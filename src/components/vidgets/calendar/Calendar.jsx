import { HeaderCalendar } from './components';
import { useClickVidgets } from '../../../hooks';
import styles from '../Vidgets.module.css';

export const Calendar = () => {
	const handleClick = useClickVidgets('/calendar');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderCalendar />
		</div>
	);
};
