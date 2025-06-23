import { ROLE } from '../../../constans';
import { deleteNote } from '../../api';
import { sessions } from '../../sessions';

export const removeNote = async (hash, noteId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.USER];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	deleteNote(noteId);
	return { error: null, res: true };
};
