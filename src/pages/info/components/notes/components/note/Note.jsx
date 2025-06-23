import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../../../../../hooks';
import { loadNote, removeNote, saveNote } from '../../../../../../redux/actions';
import { selectNote, selectUser } from '../../../../../../redux/selectors';
import styles from './Note.module.css';

export const NotePageInfo = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const serverRequest = useServerRequest();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loadNote(serverRequest, params.id));
	}, [dispatch, serverRequest, params]);

	const note = useSelector(selectNote);
	const user = useSelector(selectUser);

	const [textTitle, setTextTitle] = useState(note.title);
	const [textContent, setTextContent] = useState(note.content);
	const [saveDisabled, setSaveDisabled] = useState(true);

	useEffect(() => {
		setTextTitle(note.title);
		setTextContent(note.content);
	}, [note]);

	useEffect(() => {
		const isSame = note && note.title === textTitle && note.content === textContent;
		setSaveDisabled(isSame);
	}, [textTitle, textContent, note]);

	const handleChange = (event, setter) => {
		setter(event.target.value);
	};

	const onNoteSave = () => {
		dispatch(saveNote(serverRequest, { id: note.id, title: textTitle, content: textContent, authorId: user.id }));
	};
	const onNoteRemove = () => {
		dispatch(removeNote(serverRequest, note.id)).then(() => navigate(-1));
	};

	return (
		<div className={styles.NotePageInfo}>
			<div className={styles.header}>
				<div className={styles.creationAt}>
					<Icon id="fa-calendar-o" /> {note.creationAt} {note.timeCreationAt}
				</div>
				<div className={styles.buttons}>
					<div className={saveDisabled ? styles.disabled : styles.buttonSave}>
						<Icon id="fa-floppy-o" onClick={onNoteSave} />
					</div>
					<div className={styles.buttonTrash}>
						<Icon id="fa-trash-o" onClick={onNoteRemove} />
					</div>
				</div>
			</div>
			<form className={styles.form}>
				<div className={styles.header}>
					<textarea
						className={styles.NoteTitle}
						required
						name="noteTitle"
						id="noteTitleId"
						placeholder="Enter title"
						value={textTitle || ''}
						onChange={(event) => handleChange(event, setTextTitle)}
					></textarea>
				</div>
				<textarea
					className={styles.NoteContent}
					required
					name="noteContent"
					id="noteContentId"
					placeholder="Enter content"
					value={textContent || ''}
					onChange={(event) => handleChange(event, setTextContent)}
				></textarea>
			</form>
		</div>
	);
};
