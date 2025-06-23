import { dateNow } from '../../utils/date-now';
import { timeNow } from '../../utils/time-now';

export const addNote = ({ title, content, authorId }) =>
	fetch('http://localhost:3000/notes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title,
			content,
			creation_at: dateNow(),
			time_creation_at: timeNow(),
			author_id: authorId,
		}),
	}).then((createdNote) => createdNote.json());
