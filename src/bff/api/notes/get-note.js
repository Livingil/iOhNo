import { transformNote } from '../../transformers';

export const getNote = async (postId) =>
	fetch(`http://localhost:3000/notes/${postId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error = res.status === 404 ? 'Page not found' : 'Something went wrong';

			return Promise.reject(error);
		})
		.then((loadedNote) => loadedNote.json())
		.then((loadedNote) => loadedNote && transformNote(loadedNote));
