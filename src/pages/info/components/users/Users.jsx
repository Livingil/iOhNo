import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { UserRow } from './components';
import { useServerRequest } from '../../../../hooks';
import { PAGINATION_LIMIT, ROLE } from '../../../../constans';
import { H2 } from '../../../../components/markup-components';
import { Content, Loader, Pagination, Search } from '../../../../components';
import { debounce, getLastPageFromLinks } from '../../../../utils';
import { selectIsLoading, selectUserHash } from '../../../../redux/selectors';
import styles from './Users.module.css';

export const UsersPageInfo = () => {
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);

	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	const hash = useSelector(selectUserHash);

	const handleSetPage = (data) => setPage(data);

	const serverRequest = useServerRequest();

	useEffect(() => {
		if (hash) {
			Promise.all([
				serverRequest('fetchRoles'),
				serverRequest('fetchUsers', searchPhrase, page, PAGINATION_LIMIT),
			]).then(([rolesRes, usersRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.res.users);
				setRoles(rolesRes.res);

				setLastPage(getLastPageFromLinks(usersRes?.res.links));
			});
		}
	}, [serverRequest, shouldUpdateUserList, page, shouldSearch]);

	const onUserRemove = (userId) => {
		serverRequest('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	const isLoading = useSelector(selectIsLoading);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className={styles.UsersPage}>
			<Content error={errorMessage}>
				<div>
					<div className={styles.header}>
						<H2 style={{ width: '30%', margin: 'auto' }}> Users: </H2>
						<Search searchPhrase={searchPhrase} onChange={onSearch} placeholderText={'Search for login'} />
					</div>
					<div>
						<div className={styles.table}>
							<div className={styles.tableHeader}>
								<div className={styles.loginColumn}>Login</div>
								<div className={styles.regAtColumn}>Registration date</div>
								<div className={styles.roleColumn}>Role</div>
							</div>
							{users.map((user) => (
								<UserRow
									key={user.id}
									user={user}
									roles={roles.filter((role) => role.id !== ROLE.GUEST)}
									onUserRemove={() => onUserRemove(user.id)}
								/>
							))}
							{lastPage > 1 && users.length > 0 && (
								<Pagination handleSetPage={handleSetPage} page={page} lastPage={lastPage} />
							)}
						</div>
					</div>
				</div>
			</Content>
		</div>
	);
};
