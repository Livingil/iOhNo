import { dateNow } from '../../utils/date-now';

export const addUser = (login, password) =>
	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: dateNow(),
			role_id: '002',
		}),
	}).then((createdUser) => createdUser.json());
