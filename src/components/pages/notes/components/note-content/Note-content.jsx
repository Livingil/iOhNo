import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectNote } from '../../../../../redux/selectors';
import { Icon } from '../../../../icon/Icon';
import styles from './Note-content.module.css';

export const NoteContent = ({ noteDefault }) => {
	const [textTitle, setTextTitle] = useState('');
	const [textContent, setTextContent] = useState('');

	const note = useSelector(selectNote);

	const handleChange = (event, setter) => {
		setter(event.target.value);
	};

	useEffect(() => {
		setTextTitle(note?.title ?? noteDefault?.title);
		setTextContent(note?.content ?? noteDefault?.content);
	}, [note, noteDefault]);

	return (
		<form className={styles.form}>
			<div className={styles.header}>
				<input
					className={styles.NoteTitle}
					name="noteTitle"
					id="noteTitleId"
					value={textTitle}
					onChange={() => handleChange(event, setTextTitle)}
				></input>
				<div className={styles.saveIcon}>
					<Icon id="fa-floppy-o" />
				</div>
			</div>
			<textarea
				className={styles.NoteContent}
				name="noteContent"
				id="noteContentId"
				value={textContent}
				onChange={() => handleChange(event, setTextContent)}
			></textarea>
		</form>
	);
};
