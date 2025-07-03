import { deleteNote } from '../../note/delete-note';

export const removeNote = (serverRequest, id) => async (dispatch) => {
	dispatch(deleteNote(id));
	await serverRequest('removeNote', id);
};
