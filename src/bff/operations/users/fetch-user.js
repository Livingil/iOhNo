import { ROLE } from '../../../constans';
import { getLoadUser } from '../../api';
import { sessions } from '../../sessions';

export const fetchUser = async (hash, userId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	let loadUser;
	let error;

	try {
		loadUser = await getLoadUser(userId);
	} catch (loadUserError) {
		error = loadUserError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	return {
		error: null,
		res: loadUser,
	};
};
