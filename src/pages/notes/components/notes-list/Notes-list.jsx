import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../components';
import { removeNote, setNote } from '../../../../redux/actions';
import { useServerRequest } from '../../../../hooks';
import styles from './Notes-list.module.css';
import { selectNotes } from '../../../../redux/selectors';

export const NotesList = ({ searchNotes }) => {
	const dispatch = useDispatch();
	const serverRequest = useServerRequest();

	const notes = useSelector(selectNotes);

	const handleClickForValueNote = (note, event) => {
		event.preventDefault();
		dispatch(setNote(note));
	};

	const handleClickDelete = (id, event) => {
		event.preventDefault();
		event.stopPropagation();
		dispatch(removeNote(serverRequest, id));
	};

	const currentNotesList = searchNotes || notes || [];

	return (
		<div className={styles.scrollableList}>
			{currentNotesList.map((note) => (
				<div
					key={note.id}
					className={styles.notesList}
					onClick={(event) => handleClickForValueNote(note, event)}
				>
					<div className={styles.header}>
						<div className={styles.noteTitle}>{note.title}</div>
						<div className={styles.button} onClick={(event) => handleClickDelete(note.id, event)}>
							<Icon id="fa-trash-o" />
						</div>
					</div>

					<div className={styles.noteDate}>
						{note.creationAt}
						<div className={styles.time}>{note.timeCreationAt}</div>
					</div>
					<div className={styles.noteContent}>{note.content}</div>
				</div>
			))}
		</div>
	);
};
