import type { Transaction } from '@/types';

import type { GroupSummary, TransactionsGroup } from './types';

export const getMonthKey = (t: Transaction) => {
	const year = t.date.getFullYear();
	const month = t.date.getMonth().toString(10).padStart(2, '0');

	return `${year}_${month}`;
};

export const getMonthLabel = (transactions: Transaction[]) => {
	const transaction = transactions[0];
	if (!transaction) {
		return '';
	}
	return transaction.date.toLocaleDateString('en-US', {
		month: 'short',
		year: '2-digit',
	});
};

const takeIncome = (t: Transaction) => (t.type === 'income' ? t.amount : 0);
const takeExpense = (t: Transaction) => (t.type === 'expense' ? t.amount : 0);

export const buildSummary = (transactions: Transaction[]): GroupSummary => {
	const income = transactions.reduce((acc, t) => acc + takeIncome(t), 0);
	const expense = transactions.reduce((acc, t) => acc + takeExpense(t), 0);
	const balance = income - expense;
	const savingRate = income === 0 ? 0 : Math.round((balance / income) * 100);

	return {
		balance,
		expense,
		income,
		savingRate,
	};
};

export const buildGroups = (
	transactions: Transaction[],
): TransactionsGroup[] => {
	const groups = Object.groupBy(transactions, getMonthKey);
	const keys = Object.keys(groups).sort((a, b) => (a < b ? 1 : -1));

	return keys.map((key) => {
		const items = groups[key] || [];

		return {
			items,
			key,
			label: getMonthLabel(items),
			summary: buildSummary(items),
		};
	});
};
