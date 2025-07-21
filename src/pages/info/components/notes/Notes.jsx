import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorContent, Loader, Pagination, Search } from '../../../../components';
import { H2 } from '../../../../components/markup-components';
import { NotesRow } from './components';
import { useServerRequest } from '../../../../hooks';
import { PAGINATION_LIMIT, ROLE } from '../../../../constans';
import { checkAccess, debounce, getLastPageFromLinks } from '../../../../utils';
import { selectIsLoading, selectUser, selectUserHash } from '../../../../redux/selectors';
import styles from './Notes.module.css';

export const NotesPageInfo = () => {
	const [notes, setNotes] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	const hash = useSelector(selectUserHash);
	const user = useSelector(selectUser);

	const serverRequest = useServerRequest();

	const handleSetPage = (data) => setPage(data);

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], user.roleId)) {
			return;
		}
		if (hash) {
			Promise.all([
				serverRequest('fetchNotes', searchPhrase, page, PAGINATION_LIMIT),
				serverRequest('fetchUsers'),
			]).then(([notesRes, usersRes]) => {
				if (usersRes.error || notesRes.error) {
					setErrorMessage(usersRes.error || notesRes.error);
					return;
				}

				setUsers(usersRes?.res);
				setNotes(notesRes?.res?.notes);

				setLastPage(getLastPageFromLinks(notesRes?.res.links));
			});
		}
	}, [serverRequest, page, shouldSearch, user.roleId, hash]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const handleNoteDelete = (deletedNoteId) => {
		setNotes((prevNotes) => {
			const updatedNotes = prevNotes.filter((note) => note.id !== deletedNoteId);

			if (updatedNotes.length === 0 && page > 1) {
				setPage(page - 1);
			}

			return updatedNotes;
		});
	};

	const isLoading = useSelector(selectIsLoading);

	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className={styles.NotesPageInfo}>
			<ErrorContent serverError={errorMessage} access={ROLE.ADMIN}>
				<div>
					<div className={styles.header}>
						<H2 style={{ width: '30%', margin: 'auto' }}> Notes: </H2>
						<Search
							style={{ padding: 'auto', margin: '0' }}
							searchPhrase={searchPhrase}
							onChange={onSearch}
							placeholderText={'Search for title'}
						/>
					</div>

					<div>
						<div className={styles.table}>
							<div className={styles.tableHeader}>
								<div className={styles.loginColumn}>Login author</div>
								<div className={styles.titleColumn}>Title</div>
								<div className={styles.pubAtColumn}>Publication date</div>
							</div>
							{notes.map((note) => (
								<NotesRow
									key={note.id}
									note={note}
									users={users.users}
									handleNoteDelete={handleNoteDelete}
								/>
							))}
							{lastPage > 1 && notes.length > 0 && (
								<Pagination handleSetPage={handleSetPage} page={page} lastPage={lastPage} />
							)}
						</div>
					</div>
				</div>
			</ErrorContent>
		</div>
	);
};
