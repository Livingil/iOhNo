const parseDate = (note) => {
	const [day, month, year] = note.creation_at.split('.');
	return new Date(`${year}-${month}-${day}T${note.time_creation_at}:00`);
};

export const sortByCreationDate = (notes) => {
	if (!notes) return undefined;
	return [...notes].sort((a, b) => {
		const dateA = parseDate(a);
		const dateB = parseDate(b);
		return dateB.getTime() - dateA.getTime();
	});
};
