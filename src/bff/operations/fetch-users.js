import { ROLE } from '../../constans';
import { getUsers } from '../api';
import { sessions } from '../sessions';

export const fetchUsers = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(hash, accessRoles)) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
