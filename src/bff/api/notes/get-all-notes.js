import { transformNote } from '../../transformers';

export const getAllNotes = (searchPhrase = '') =>
	fetch(`http://localhost:3000/notes?title_like=${searchPhrase}&content_like=${searchPhrase}`)
		.then((loadedNotes) => loadedNotes.json())
		.then((loadedNotes) => loadedNotes && loadedNotes.map(transformNote));
