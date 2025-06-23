import { HeaderNotes } from './components';
import { useClickUrl } from '../../../hooks';
import styles from '../Vidgets.module.css';

export const Notes = () => {
	const handleClick = useClickUrl('/notes');
	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderNotes />
		</div>
	);
};
