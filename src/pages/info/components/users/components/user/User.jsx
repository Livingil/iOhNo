import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useServerRequest } from '../../../../../../hooks';
import { H2 } from '../../../../../../components/markup-components';
import { ROLE } from '../../../../../../constans';
import styles from './User.module.css';

export const UserPageInfo = () => {
	const [notes, setNotes] = useState([]);
	const [user, setUser] = useState({});
	const [errorMessage, setErrorMessage] = useState(null);

	const params = useParams();
	const serverRequest = useServerRequest();

	useLayoutEffect(() => {
		Promise.all([serverRequest('fetchNotes'), serverRequest('fetchUser', params.id)]).then(
			([notesRes, userRes]) => {
				if (userRes.error || notesRes.error) {
					setErrorMessage(userRes.error || notesRes.error);
					return;
				}

				setUser(userRes.res);
				setNotes(notesRes.res.notes);
			},
		);
	}, [serverRequest, params.id]);

	const role = Object.keys(ROLE).find((key) => ROLE[key] === user?.roleId);

	console.log(user);
	console.log(notes);

	const userNotes = notes.filter((note) => note.authorId === user.id);

	if (errorMessage) {
		return <div>Error: {errorMessage}</div>;
	}

	return (
		<div className={styles.UserPage}>
			<H2 style={{ width: '30%' }}> User: </H2>
			<div className={styles.infoUser}>
				<div className={styles.infoRow}>
					Login:<div className={styles.infoText}>{user.login}</div>
				</div>
				<div className={styles.infoRow}>
					Id:<div className={styles.infoText}>{user.id}</div>
				</div>
				<div className={styles.infoRow}>
					Registration date:<div className={styles.infoText}>{user.registeredAt}</div>
				</div>
				<div className={styles.infoRow}>
					Role:<div className={styles.infoText}>{role}</div>
				</div>
			</div>
			<H2 style={{ width: '30%' }}> Number of notes: {userNotes.length}</H2>
		</div>
	);
};
