export const parseType = (type: unknown, amount: number) => {
	if (type === 'income' || type === 'expense') {
		return type;
	}

	if (amount < 0) {
		return 'expense';
	}

	return 'income';
};
