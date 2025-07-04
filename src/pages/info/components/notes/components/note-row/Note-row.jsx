import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../../../components';
import { useServerRequest } from '../../../../../../hooks';
import { removeNote } from '../../../../../../redux/actions';
import styles from './Note-row.module.css';

export const NotesRow = ({ note, users, handleNoteDelete }) => {
	const dispatch = useDispatch();
	const serverRequest = useServerRequest();

	const onNoteRemove = () => {
		dispatch(removeNote(serverRequest, note.id));
		handleNoteDelete(note.id);
	};

	return (
		<div className={styles.row}>
			<Link to={`/info/notes/${note.id}`} className={styles.tableRow}>
				<div className={styles.loginColumn}>
					{users.find((user) => note.authorId === user.id)?.login || 'User delete'}
				</div>
				<div className={styles.titleColumn}>{note.title}</div>
				<div className={styles.pubAtColumn}>
					{note.creationAt} {note.timeCreationAt}
				</div>
			</Link>
			<div className={styles.buttonTrash}>
				<Icon id="fa-trash-o" onClick={onNoteRemove} />
			</div>
		</div>
	);
};
