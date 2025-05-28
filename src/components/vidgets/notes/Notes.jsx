import { HeaderNotes } from './components';
import { handlerClickVidgets } from '../utils';
import styles from '../Vidgets.module.css';

export const Notes = () => {
	const handleClick = handlerClickVidgets('/notes');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderNotes />
		</div>
	);
};
