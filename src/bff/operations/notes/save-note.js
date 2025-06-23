import { ROLE } from '../../../constans';
import { addNote, updateNote } from '../../api';
import { sessions } from '../../sessions';

export const saveNote = async (hash, newNoteData) => {
	const accessRoles = [ROLE.ADMIN, ROLE.USER];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Access denied',
			res: null,
		};
	}

	const saveNote = newNoteData.id === '' ? await addNote(newNoteData) : await updateNote(newNoteData);

	return { error: null, res: saveNote };
};
