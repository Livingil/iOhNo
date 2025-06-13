import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../icon/Icon';
import { selectSortedNotes } from '../../../../../redux/selectors';
import { deleteData, setNote } from '../../../../../redux/actions';
import styles from './Notes-list.module.css';

export const NotesList = ({ currentNotes }) => {
	const dispatch = useDispatch();

	const sortedNotes = useSelector(selectSortedNotes);

	const handleClickForValueNote = (note) => {
		event.preventDefault();
		dispatch(setNote(note));
	};

	const handleClickDelete = (adres, id) => {
		event.preventDefault();
		dispatch(deleteData(adres, id));
	};

	const currentNotesList = currentNotes || sortedNotes;

	return (
		<div className={styles.scrollableList}>
			{currentNotesList.map((note) => (
				<div key={note.id} className={styles.notesList} onClick={() => handleClickForValueNote(note)}>
					<div className={styles.header}>
						<div className={styles.noteTitle}>{note.title}</div>
						<div className={styles.button} onClick={() => handleClickDelete('notes', note.id)}>
							<Icon id="fa-trash-o" />
						</div>
					</div>

					<div className={styles.noteDate}>
						{note.creation_at}
						<div className={styles.time}>{note.time_creation_at}</div>
					</div>
					<div className={styles.noteContent}>{note.content}</div>
				</div>
			))}
		</div>
	);
};
