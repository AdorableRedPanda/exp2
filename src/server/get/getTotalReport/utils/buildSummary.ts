import type { MonthSummary } from '@/server/get';
import type { Transaction } from '@/types';

import { getGroupLabel } from './getGroupLabel';

const takeIncome = (t: Transaction) => (t.type === 'income' ? t.amount : 0);
const takeExpense = (t: Transaction) => (t.type === 'expense' ? t.amount : 0);

export const buildSummary = (transactions: Transaction[]): MonthSummary => {
	const label = getGroupLabel(transactions);

	const income = transactions.reduce((acc, t) => acc + takeIncome(t), 0);
	const expense = transactions.reduce((acc, t) => acc + takeExpense(t), 0);
	const balance = income - expense;
	const savingRate = income === 0 ? 0 : Math.round((balance / income) * 100);

	return {
		balance,
		expense,
		income,
		label,
		savingRate,
	};
};
