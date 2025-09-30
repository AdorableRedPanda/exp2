import type { Transaction } from '@/types';

const getMonthLabel = (t: Transaction) =>
	t.date.toLocaleDateString('en-US', {
		month: 'short',
		year: '2-digit',
	});

export const getGroupLabel = (transactions: Transaction[]) => {
	const transaction = transactions[0];
	if (!transaction) {
		return '';
	}
	return getMonthLabel(transaction);
};
