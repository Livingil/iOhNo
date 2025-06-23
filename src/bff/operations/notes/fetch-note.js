import { ROLE } from '../../../constans';
import { getNote } from '../../api';
import { sessions } from '../../sessions';

export const fetchNote = async (hash, noteId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const note = await getNote(noteId);

	return {
		error: null,
		res: note,
	};
};
