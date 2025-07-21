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

	let notes, links, error;

	try {
		({ notes, links } = await getNotes(searchPhrase, page, limit));
	} catch (notesError) {
		error = notesError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	return {
		error: null,
		res: { notes, links },
	};
};
