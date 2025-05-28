import { HeaderCalendar } from './components';
import { handlerClickVidgets } from '../utils';
import styles from '../Vidgets.module.css';

export const Calendar = () => {
	const handleClick = handlerClickVidgets('/calendar');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderCalendar />
		</div>
	);
};
