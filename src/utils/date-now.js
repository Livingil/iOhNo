export const dateNow = () => {
	const date = new Date();

	const formatDate = (date) => {
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		const formatted = (item) => item.toString().padStart(2, '0');

		return `${formatted(day)}.${formatted(month)}.${year}`;
	};
	return formatDate(date);
};
