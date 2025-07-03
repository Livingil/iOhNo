import { transformUser } from '../../transformers';

export const getUsers = (searchPhrase = '', page, limit) => {
	if (page === undefined || limit === undefined) {
		limit = 1000;
	}
	return fetch(`http://localhost:3000/users?login_like=${searchPhrase}&_page=${page}&_limit=${limit}`)
		.then((loadedUsers) => Promise.all([loadedUsers.json(), loadedUsers.headers.get('Link')]))
		.then(([loadedUsers, links]) => ({ users: loadedUsers && loadedUsers.map(transformUser), links }));
};
