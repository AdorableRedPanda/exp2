export const formatter = new Intl.NumberFormat('de-DE', {
	currency: 'EUR',
	maximumFractionDigits: 2,
	minimumFractionDigits: 2,
	style: 'currency',
});

export const formatAmount = (amount: number): string =>
	formatter.format(amount);
