import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNotes, selectSearchResult } from '../../../redux/selectors';
import { NotesList, NoteContent, Search } from './components';
import { sortByCreationDate, timeNow } from '../../../utils';
import { dateNow } from '../../../utils';
import { fetchData, setNote, setValueSortedNotes } from '../../../redux/actions';
import styles from './Notes.module.css';

export const NotesPage = () => {
	const [currentNotes, setCurrentNotes] = useState('');
	const [flagNewNoteButton, setFlagNewNoteButton] = useState(false);

	const notes = useSelector(selectNotes);
	const searchResult = useSelector(selectSearchResult);

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
		const instalSortedNotes =
			sortByCreationDate(searchResult) ?? sortByCreationDate(currentNotes) ?? sortByCreationDate(notes);
		dispatch(setValueSortedNotes(instalSortedNotes));
	}, [dispatch, currentNotes, searchResult, notes]);

	return (
		<div className={styles.NotesPage}>
			<div className={styles.notesList}>
				{/* <Search /> */}
				<NotesList />
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
