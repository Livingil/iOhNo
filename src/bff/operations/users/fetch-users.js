import { ROLE } from '../../../constans';
import { getUsers } from '../../api';
import { sessions } from '../../sessions';

export const fetchUsers = async (hash, searchPhrase, page, limit) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const { users, links } = await getUsers(searchPhrase, page, limit);

	return {
		error: null,
		res: { users, links },
	};
};
