import { ROLE } from '../../../constans';
import { sortByCreationDate } from '../../utils';
import { getAllNotes } from '../../api';
import { sessions } from '../../sessions';

export const fetchUserNotes = async (hash, userId, searchPhrase) => {
	const accessRoles = [ROLE.ADMIN, ROLE.USER];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const allNotes = await getAllNotes(searchPhrase);

	const userNotes = sortByCreationDate(allNotes, userId);

	return {
		error: null,
		res: userNotes,
	};
};
