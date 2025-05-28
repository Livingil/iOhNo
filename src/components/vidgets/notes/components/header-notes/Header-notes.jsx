import { Link } from 'react-router-dom';
import { Icon } from '../../../../icon/Icon';
import styles from '../../../Vidgets-Header.module.css';

export const HeaderNotes = () => {
	return (
		<div className={styles.Header}>
			<div className={styles.logo}>
				<div className={styles.icon}>
					<Icon id="fa-file-text-o" />
				</div>
			</div>
			<div className={styles.name}>Notes</div>
			<Link
				to="/create-note"
				onClick={(event) => {
					event.stopPropagation();
				}}
				className={styles.plus}
			>
				<Icon id="fa-plus" />
			</Link>
		</div>
	);
};
