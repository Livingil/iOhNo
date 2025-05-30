import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { handleClickForNoteContent } from '../../../../vidgets/utils';
import { Icon } from '../../../../icon/Icon';
import styles from './Notes-list.module.css';

export const NotesList = ({ notes }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentNotes, setCurrentNotes] = useState([]);

	const dispatch = useDispatch();

	const handleClick = (id) => {
		console.log(id);
	};

	const itemsPerPage = 5;

	useEffect(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const newNotes = notes.slice(startIndex, endIndex);
		setCurrentNotes(newNotes);
	}, [currentPage, notes, itemsPerPage]);

	return (
		<div>
			{currentNotes.map((note) => (
				<div
					key={note.id}
					className={styles.notesList}
					onClick={() => handleClickForNoteContent(dispatch, note)}
				>
					<div className={styles.header}>
						<div className={styles.noteTitle}>{note.title}</div>
						<div className={styles.button} onClick={() => handleClick(note.id)}>
							<Icon id="fa-trash-o" />
						</div>
					</div>

					<div className={styles.noteDate}>{note.creation_at}</div>
					<div className={styles.noteContent}>{note.content}</div>
				</div>
			))}
		</div>
	);
};
