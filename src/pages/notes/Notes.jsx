import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { NotesList, NoteContent } from './components';
// import { useServerRequest } from '../../hooks';
import { selectIsLoading, selectNotes, selectTriggerNewNote, selectUser, selectUserHash } from '../../redux/selectors';
import { setNote, setNotes, setTriggerNewNote } from '../../redux/actions';
import { dateNow, timeNow } from '../../utils';
import { PrivateContent, Loader, Search } from '../../components';
import { Button } from '../../components/markup-components';
import styles from './Notes.module.css';

export const NotesPage = () => {
	const [flagNewNoteButton, setFlagNewNoteButton] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const [searchPhrase, setSearchPhrase] = useState('');

	// const serverRequest = useServerRequest();

	const notes = useSelector(selectNotes);
	const user = useSelector(selectUser);
	// const hash = useSelector(selectUserHash);
	const isLoading = useSelector(selectIsLoading);
	const triggerNewNoteFlag = useSelector(selectTriggerNewNote);

	const dispatch = useDispatch();

	const handleSetFlagNewNoteButton = useCallback((boolValue) => setFlagNewNoteButton(boolValue), []);

	// useEffect(() => {
	// 	if (user?.id && hash) {
	// 		serverRequest('fetchUserNotes', user.id).then((userNotesRes) => {
	// 			if (userNotesRes.error) {
	// 				setErrorMessage(userNotesRes.error);
	// 				return;
	// 			}
	// 			dispatch(setNotes(userNotesRes.res));
	// 		});
	// 	}
	// }, [dispatch, serverRequest, user.id, hash]);

	const handleNewNote = () => {
		dispatch(
			setNote({
				id: null,
				title: null,
				content: null,
				creationAt: null,
				timeCreationAt: null,
				authorId: null,
			}),
		);

		setFlagNewNoteButton(false);

		if (notes[0]?.title === 'New note' && notes[0]?.content === 'New note') {
			return;
		}

		const newNotes = {
			id: Date.now(),
			title: 'New note',
			content: 'New note',
			creationAt: dateNow(),
			timeCreationAt: timeNow(),
			userId: user.id,
		};

		dispatch(setNotes([newNotes, ...notes]));
	};

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
	};

	const searchNotes = notes.filter(
		(note) =>
			note.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
			note.content.toLowerCase().includes(searchPhrase.toLowerCase()),
	);

	useEffect(() => {
		if (triggerNewNoteFlag) {
			handleNewNote();
			dispatch(setTriggerNewNote(false));
		}
	}, [dispatch, triggerNewNoteFlag]);

	console.log('1');

	if (isLoading) {
		return <Loader />;
	}

	return (
		<PrivateContent error={errorMessage}>
			<div className={styles.NotesPage}>
				<div className={styles.notesList}>
					<Search onChange={onSearch} />
					<NotesList searchNotes={searchNotes} />
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
					flagNewNoteButton={flagNewNoteButton}
					handleSetFlagNewNoteButton={handleSetFlagNewNoteButton}
				/>
			</div>
		</PrivateContent>
	);
};
