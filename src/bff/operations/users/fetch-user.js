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

	const loadUser = await getLoadUser(userId);

	return {
		error: null,
		res: loadUser,
	};
};
