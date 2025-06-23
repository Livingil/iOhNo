import { setNote } from '../../note/set-note';

export const loadNote = (serverRequest, noteId) => (dispatch) =>
	serverRequest('fetchNote', noteId).then((noteData) => {
		if (noteData.res) {
			dispatch(setNote(noteData.res));
		}
		return noteData;
	});
