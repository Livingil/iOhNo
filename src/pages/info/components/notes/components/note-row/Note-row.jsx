import { Link } from 'react-router-dom';
import styles from './Note-row.module.css';

export const NotesRow = ({ note, users }) => {
	return (
		<Link to={`/info/notes/${note.id}`} className={styles.tableRow}>
			<div className={styles.loginColumn}>
				{users.find((user) => note.authorId === user.id)?.login || 'User delete'}
			</div>
			<div className={styles.titleColumn}>{note.title}</div>
			<div className={styles.pubAtColumn}>
				{note.creationAt} {note.timeCreationAt}
			</div>
		</Link>
	);
};
