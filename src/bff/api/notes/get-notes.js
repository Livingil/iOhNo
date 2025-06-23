import { transformNote } from '../../transformers';

export const getNotes = (searchPhrase = '', page, limit) => {
	if (page === undefined || limit === undefined) {
		limit = 1000;
	}
	return fetch(`http://localhost:3000/notes?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`)
		.then((loadedNotes) => Promise.all([loadedNotes.json(), loadedNotes.headers.get('Link')]))
		.then(([loadedNotes, links]) => ({ notes: loadedNotes && loadedNotes.map(transformNote), links }));
};
