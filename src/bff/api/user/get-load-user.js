import { transformUser } from '../../transformers';

export const getLoadUser = async (userId) =>
	fetch(`http://localhost:3000/users/${userId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error = res.status === 404 ? 'Page not found' : 'Something went wrong';

			return Promise.reject(error);
		})
		.then((loadedUser) => loadedUser.json())
		.then((loadedUser) => loadedUser && transformUser(loadedUser));
