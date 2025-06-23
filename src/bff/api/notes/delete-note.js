export const deleteNote = (noteId) =>
	fetch(`http://localhost:3000/notes/${noteId}`, {
		method: 'DELETE',
	});
