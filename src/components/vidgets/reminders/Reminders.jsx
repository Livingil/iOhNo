import { HeaderReminder } from './components';
import { useClickVidgets } from '../../../hooks';
import styles from '../Vidgets.module.css';

export const Reminders = () => {
	const handleClick = useClickVidgets('/reminders');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderReminder />
		</div>
	);
};
