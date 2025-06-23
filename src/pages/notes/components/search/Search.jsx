import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotes } from '../../redux/selectors';
import { setValueSearchResult } from '../../redux/actions';
import { Input } from '../markup-components';
import styles from './Search.module.css';

export const Search = () => {
	const [searchText, setSearchText] = useState('');
	const dispatch = useDispatch();
	const currentSortedNotes = useSelector(selectNotes);

	const handleSearchChange = () => {
		setSearchText(event.target.value);
	};

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
		} else {
			dispatch(setValueSearchResult(currentSortedNotes));
		}
	}, [dispatch, searchText, currentSortedNotes]);

	return (
		<div className={styles.Search}>
			<Input
				type="text"
				placeholder="Search"
				value={searchText}
				onChange={handleSearchChange}
				style={{ border: 'none', margin: '0', padding: '0' }}
			/>
		</div>
	);
};
