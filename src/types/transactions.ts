import type { DateString, ID } from './utils';

export interface Transaction extends TransactionData {
	id: ID;
}

export interface TransactionData {
	amount: number;
	date: DateString;
	tags: string[];
	type: TransactionType;
}

type TransactionType = 'expense' | 'income';
