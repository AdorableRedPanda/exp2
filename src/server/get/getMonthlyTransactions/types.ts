import type { Transaction } from '@/types';

export interface GroupSummary {
	balance: number;
	expense: number;
	income: number;
	savingRate: number;
}

export interface TransactionsGroup {
	items: Transaction[];
	key: string;
	label: string;
	summary: GroupSummary;
}
