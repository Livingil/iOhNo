import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValueSearchResult } from '../../../../../redux/actions';
import { selectSortedNotes } from '../../../../../redux/selectors';
import styles from './Search.module.css';

export const Search = () => {
	const [searchText, setSearchText] = useState('');

	const dispatch = useDispatch();

	const currentSortedNotes = useSelector(selectSortedNotes);

	const handleSearchChange = () => {
		setSearchText(event.target.value);
	};

	console.log('currentSortedNotes', currentSortedNotes);

	useEffect(() => {
		if (searchText) {
			dispatch(
				setValueSearchResult(
					currentSortedNotes.filter((note) => {
						return (
							note.title?.toLowerCase().includes(searchText?.toLowerCase()) ||
							note.content?.toLowerCase().includes(searchText?.toLowerCase())
						);
					}),
				),
			);
		}
	}, [dispatch, searchText, currentSortedNotes]);

	return (
		<div className={styles.Search}>
			<input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />
			<button>Search</button>
		</div>
	);
};
