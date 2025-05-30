import { useSelector } from 'react-redux';
import { selectNotes } from '../../../redux/selectors';
import { NotesList, NoteContent, Search } from './components';
import { sortByCreationDate } from '../../vidgets/utils';
import styles from './Notes.module.css';

export const NotesPage = () => {
	const notes = useSelector(selectNotes);

	const sortedNotes = sortByCreationDate(notes);

	return (
		<div className={styles.NotesPage}>
			<div className={styles.notesList}>
				<Search />
				<NotesList notes={sortedNotes} />
				<div>
					<button>New note</button>
				</div>
			</div>
			<NoteContent noteDefault={sortedNotes[0]} />
		</div>
	);
};
