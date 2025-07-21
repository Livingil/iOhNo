import { Routs } from './routs/Routs';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Footer, Header } from './components';
import { setNotes, setUser } from './redux/actions';
import { useServerRequest } from './hooks';
import { selectUser, selectUserHash } from './redux/selectors';
import { ROLE } from './constans';
import { checkAccess } from './utils';
import styles from './iOhNo.module.css';

export const IOhNo = () => {
	const dispatch = useDispatch();

	const serverRequest = useServerRequest();

	const user = useSelector(selectUser);
	const hash = useSelector(selectUserHash);

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN, ROLE.USER], user.roleId)) {
			return;
		}
		if (user?.id && hash) {
			serverRequest('fetchUserNotes', user.id).then((userNotesRes) => {
				// if (userNotesRes.error) {
				// 	setErrorMessage(userNotesRes.error);
				// 	return;
				// }
				dispatch(setNotes(userNotesRes.res));
			});
		}
	}, [dispatch, serverRequest, user.id, hash]);

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(setUser(currentUserData));
	}, [dispatch]);

	return (
		<div className={styles.iOhNo}>
			<Header />

			<div className={styles.content}>
				<Routs />
			</div>

			<Footer />
		</div>
	);
};
