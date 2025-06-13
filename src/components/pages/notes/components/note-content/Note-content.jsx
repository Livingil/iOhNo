import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNote } from '../../../../../redux/selectors';
import { Icon } from '../../../../icon/Icon';
import { create, reData, setNote } from '../../../../../redux/actions';
import styles from './Note-content.module.css';
import { selectSortedNotes } from '../../../../../redux/selectors';

export const NoteContent = ({ currentNotes, handleCurrentNotes, flagNewNoteButton, handleSetFlagNewNoteButton }) => {
	const [textTitle, setTextTitle] = useState('');
	const [textContent, setTextContent] = useState('');

	const dispatch = useDispatch();

	const note = useSelector(selectNote);

	const notes = useSelector(selectSortedNotes);
	const noteDefault = currentNotes[0] || notes[0];

	const handleChange = (event, setter) => {
		setter(event.target.value);
	};

	useEffect(() => {
		setTextTitle(note?.title ?? noteDefault?.title ?? '');
		setTextContent(note?.content ?? noteDefault?.content ?? '');
	}, [note, noteDefault]);

	const handleSaveNote = () => {
		event.preventDefault();
		if (flagNewNoteButton) {
			dispatch(create(textTitle, textContent, 'notes'));
			handleCurrentNotes('');
		} else {
			dispatch(reData(note.id || noteDefault.id, 'notes', textTitle, textContent));
			dispatch(setNote([]));
		}
		handleSetFlagNewNoteButton(false);
	};

	return (
		<form className={styles.form} onSubmit={handleSaveNote}>
			<div className={styles.header}>
				<textarea
					className={styles.NoteTitle}
					required
					name="noteTitle"
					id="noteTitleId"
					placeholder="Enter title"
					value={textTitle === 'New note' ? '' : textTitle}
					onChange={(event) => handleChange(event, setTextTitle)}
				></textarea>
				<button className={styles.saveIcon} type="submit">
					<Icon id="fa-floppy-o" />
				</button>
			</div>
			<textarea
				className={styles.NoteContent}
				required
				name="noteContent"
				id="noteContentId"
				placeholder="Enter content"
				value={textContent === 'Your text' ? '' : textContent}
				onChange={(event) => handleChange(event, setTextContent)}
			></textarea>
		</form>
	);
};
