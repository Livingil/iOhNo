import { ROLE } from '../../constans';
import { getRoles } from '../api';
import { sessions } from '../sessions';

export const fetchRoles = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(hash, accessRoles)) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
