import type { DateString, WithId } from './utils';

export type Transaction = TransactionData & WithId;

export interface TransactionData {
	amount: number;
	date: DateString;
	tags: string[];
	type: TransactionType;
}

type TransactionType = 'expense' | 'income';
