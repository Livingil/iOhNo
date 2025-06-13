export const logoName = (adresName) => {
	if (adresName !== '/') {
		const newAdresName = adresName[1].toUpperCase() + adresName.slice(2);
		return newAdresName;
	}
	return;
};
