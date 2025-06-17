import { HeaderNotes } from './components';
import { useClickVidgets } from '../../../hooks';
import styles from '../Vidgets.module.css';

export const Notes = () => {
	const handleClick = useClickVidgets('/notes');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderNotes />
		</div>
	);
};
