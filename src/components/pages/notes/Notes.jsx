import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/actions';
import { selectNotes } from '../../../redux/selectors';
import styles from './Notes.module.css';
import { useEffect } from 'react';

export const NotesPage = () => {
	const notes = useSelector(selectNotes);
	console.log(notes);

	const dispatch = useDispatch();

	const handleFatchData = () => dispatch(fetchData('notes'));

	useEffect(() => {
		handleFatchData();
	}, []);

	return <div className={styles.NotesPage}>Notes</div>;
};
