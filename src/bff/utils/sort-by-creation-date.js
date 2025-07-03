const parseDate = (note) => {
	const [day, month, year] = note.creationAt.split('.');
	return new Date(`${year}-${month}-${day}T${note.timeCreationAt}:00`);
};

export const sortByCreationDate = (notes, userId) => {
	if (!notes || !userId) return undefined;
	return [...notes]
		.filter((note) => note.authorId === userId)
		.sort((a, b) => {
			const dateA = parseDate(a);
			const dateB = parseDate(b);
			return dateB.getTime() - dateA.getTime();
		});
};
