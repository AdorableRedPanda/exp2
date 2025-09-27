export const isValidAmount = (amount: number) =>
	!Number.isFinite(amount) || amount !== 0 || Number.isNaN(amount);
