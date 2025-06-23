export const transformNote = (dbNote) => ({
	id: dbNote.id,
	title: dbNote.title,
	content: dbNote.content,
	creationAt: dbNote.creation_at,
	timeCreationAt: dbNote.time_creation_at,
	authorId: dbNote.author_id,
});
