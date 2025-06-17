import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectLoading, selectSortedNotes } from '../../../redux/selectors';
import { NotesList, NoteContent, Search } from './components';
import { timeNow } from '../../../utils';
import { dateNow } from '../../../utils';
import { fetchData } from '../../../redux/actions';
import { Loader } from '../../loader/Loader';
import { Button } from '../../markup-components';
import styles from './Notes.module.css';

export const NotesPage = () => {
	const [currentNotes, setCurrentNotes] = useState('');
	const [flagNewNoteButton, setFlagNewNoteButton] = useState(false);

	const notes = useSelector(selectSortedNotes);

	const loading = useSelector(selectLoading);

	const dispatch = useDispatch();

	const handleSetFlagNewNoteButton = (boolValue) => setFlagNewNoteButton(boolValue);

	const handleCurrentNotes = (cleaner) => setCurrentNotes(cleaner);

	const handleNewNote = () => {
		handleSetFlagNewNoteButton(true);

		const newNotes = {
			id: Date.now(),
			title: 'New note',
			content: 'Your text',
			creation_at: dateNow(),
			time_creation_at: timeNow(),
			user_id: '',
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
					<Button
						onClick={handleNewNote}
						style={{
							width: '100%',
							backgroundColor: 'rgba(28, 28, 30, 0.6)',
							border: '1px solid rgba(255, 255, 255, 0.2)',
						}}
					>
						New note
					</Button>
				</div>
			</div>
			<NoteContent
				currentNotes={currentNotes}
				handleCurrentNotes={handleCurrentNotes}
				flagNewNoteButton={flagNewNoteButton}
				handleSetFlagNewNoteButton={handleSetFlagNewNoteButton}
			/>
		</div>
	);
};
