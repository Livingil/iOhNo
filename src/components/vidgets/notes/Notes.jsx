import { useDispatch, useSelector } from 'react-redux';
import { HeaderNotes } from './components';
import { useClickUrl } from '../../../hooks';
import styles from '../Vidgets.module.css';
import { selectNotes } from '../../../redux/selectors';
import { setNote } from '../../../redux/actions';

export const Notes = () => {
	const handleClick = useClickUrl('/notes');

	const dispatch = useDispatch();

	const notes = useSelector(selectNotes);

	const visibleNotes = notes.slice(0, 5);

	const handleSetNote = (id) => {
		const note = notes.filter((note) => note.id === id);
		dispatch(setNote(note[0]));
	};

	return (
		<div onClick={handleClick} className={styles.Vidgets}>
			<HeaderNotes />
			{visibleNotes.map((note) => (
				<div key={note.id} className={styles.noteRow} onClick={() => handleSetNote(note.id)}>
					<div>{note.title}</div>
					<div>{note.creationAt}</div>
				</div>
			))}
		</div>
	);
};
