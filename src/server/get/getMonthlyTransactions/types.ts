import type { Transaction } from '@/types';

export interface GroupSummary {
	balance: number;
	expense: number;
	income: number;
	label: string;
	savingRate: number;
}

export interface TransactionsGroup {
	items: Transaction[];
	key: string;
	summary: GroupSummary;
}
