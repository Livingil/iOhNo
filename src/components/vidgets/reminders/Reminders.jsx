import { HeaderReminder } from './components';
import { handlerClickVidgets } from '../utils';
import styles from '../Vidgets.module.css';

export const Reminders = () => {
	const handleClick = handlerClickVidgets('/reminders');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderReminder />
		</div>
	);
};
