export const parseAmount = (amount: unknown): number => {
	if (typeof amount === 'number') {
		return amount;
	}

	if (typeof amount === 'string') {
		return Number.parseFloat(amount);
	}

	return Number.NaN;
};
