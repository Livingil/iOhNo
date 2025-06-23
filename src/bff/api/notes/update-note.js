export const updateNote = ({ id, title, content }) =>
	fetch(`http://localhost:3000/notes/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			content,
		}),
	}).then((loadedNote) => loadedNote.json());
