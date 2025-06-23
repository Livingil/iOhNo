import { ROLE } from '../../../constans';
import { getNotes } from '../../api';
import { sessions } from '../../sessions';

export const fetchNotes = async (hash, searchPhrase, page, limit) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const { notes, links } = await getNotes(searchPhrase, page, limit);

	return {
		error: null,
		res: { notes, links },
	};
};
