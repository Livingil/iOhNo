const parseDate = (dateString) => {
	const [day, month, year] = dateString.split('.');
	return new Date(`${year}-${month}-${day}`);
};

export const sortByCreationDate = (date) => {
	return [...date].sort((a, b) => {
		const dateA = parseDate(a.creation_at);
		const dateB = parseDate(b.creation_at);
		return dateB - dateA;
	});
};
