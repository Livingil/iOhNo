import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'This user is not find',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Password is not correct',
				res: null,
			};
		}

		return {
			error: null,
			res: { id: user.id, login: user.login, roleId: user.role_id, session: sessions.create(user) },
		};
	},

	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'This login busy',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: { id: user.id, login: user.login, roleId: user.role_id, session: sessions.create(user) },
		};
	},
	async logout(session) {
		sessions.remove(session);
	},
};
