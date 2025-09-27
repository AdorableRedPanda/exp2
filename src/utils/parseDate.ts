export const parseDate = (t: unknown) => {
	if (!t || typeof t !== 'string') {
		return new Date('invalid-date');
	}

	return new Date(t);
};
