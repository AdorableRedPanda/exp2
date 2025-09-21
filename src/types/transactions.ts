import type { WithId } from './utils';

export type Transaction = TransactionData & WithId;

export interface TransactionData {
	amount: number;
	date: Date;
	tags: string[];
	type: TransactionType;
}

export type TransactionType = 'expense' | 'income';
