import type { MonthSummary } from '@/server/get';

import type { TotalSummary } from '../types';

export const buildTotal = (months: MonthSummary[]): TotalSummary => {
	const count = months.length;

	const expenses = months.map((item) => item.expense);

	const income = months.reduce((accum, item) => accum + item.income, 0);
	const totalExpenses = expenses.reduce((accum, item) => accum + item, 0);
	const totalSaving = months.reduce(
		(accum, item) => accum + item.savingRate,
		0,
	);

	return {
		averageExpenses: Math.round(count ? totalExpenses / count : 0),
		averageSaving: Math.round(count ? totalSaving / count : 0),
		income: income,
		medianExpenses: 0,
	};
};
