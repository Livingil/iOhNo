import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectLoading, selectNotes } from '../../../redux/selectors';
import { NotesList, NoteContent, Search } from './components';
import { timeNow } from '../../../utils';
import { dateNow } from '../../../utils';
import { fetchData, setNote } from '../../../redux/actions';
import styles from './Notes.module.css';
import { Loader } from '../../loader/Loader';

export const NotesPage = () => {
	const [currentNotes, setCurrentNotes] = useState('');
	const [flagNewNoteButton, setFlagNewNoteButton] = useState(false);

	const notes = useSelector(selectNotes);

	const loading = useSelector(selectLoading);

	const dispatch = useDispatch();

	const handleSetFlagNewNoteButton = (boolValue) => setFlagNewNoteButton(boolValue);

	const handleNewNote = () => {
		handleSetFlagNewNoteButton(true);
		dispatch(setNote([]));
		const newNotes = {
			id: Date.now(),
			title: 'New note',
			content: 'Your text',
			creation_at: dateNow(),
			time_creation_at: timeNow(),
		};
		const newArrowNotes = [newNotes, ...notes];
		setCurrentNotes(newArrowNotes);
	};

	useEffect(() => {
		dispatch(fetchData('notes'));
	}, [dispatch]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className={styles.NotesPage}>
			<div className={styles.notesList}>
				<Search />
				<NotesList currentNotes={currentNotes} />
				<div>
					<button className={styles.button} onClick={handleNewNote}>
						New note
					</button>
				</div>
			</div>
			<NoteContent
				flagNewNoteButton={flagNewNoteButton}
				handleSetFlagNewNoteButton={handleSetFlagNewNoteButton}
			/>
		</div>
	);
};
