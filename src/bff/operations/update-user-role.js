import { ROLE } from '../../constans';
import { setUserRole } from '../api';
import { sessions } from '../sessions';

export const updateUserRole = async (hash, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(hash, accessRoles)) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	setUserRole(userId, newUserRoleId);
	return { error: null, res: true };
};
