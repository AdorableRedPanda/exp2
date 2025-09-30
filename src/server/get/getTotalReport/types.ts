import type { Transaction } from '@/types';

export interface MonthSummary {
	balance: number;
	expense: number;
	income: number;

	label: string;
	savingRate: number;
}

export interface TotalReport {
	items: Transaction[];
	months: MonthSummary[];
	total: TotalSummary;
}

export interface TotalSummary {
	averageExpenses: number;
	averageSaving: number;
	income: number;
	medianExpenses: number;
}
