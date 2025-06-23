import { setNote } from '../../note/set-note';

export const saveNote = (serverRequest, newNote) => (dispatch) =>
	serverRequest('saveNote', newNote).then((updatedNote) => {
		dispatch(setNote(updatedNote.res));

		return updatedNote.res;
	});
