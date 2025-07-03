import { setNote } from '../../note/set-note';
import { setNotes } from '../../notes/set-notes';

export const saveNote = (serverRequest, newNote, notes) => (dispatch) =>
	serverRequest('saveNote', newNote).then((updatedNote) => {
		dispatch(setNote(updatedNote.res));
		if (notes) {
			dispatch(setNotes(notes.map((note) => (note.id === newNote.id ? updatedNote.res : note))));
		}

		return updatedNote.res;
	});
