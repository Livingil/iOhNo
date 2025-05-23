import { removeNote } from './session';
import { ROLE } from '../constans';

export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeNote = removeNote;
			break;
		}
		case ROLE.USER: {
			session.removeNote = removeNote;
			break;
		}
		default:
	}

	return session;
};
