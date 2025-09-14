export {};

declare global {
	type DateString = string;
	type ID = string;
	interface Transaction extends TransactionData {
		id: ID;
	}

	interface TransactionData {
		amount: number;
		date: DateString;
		tags: string[];
		type: TransactionType;
	}

	interface TransactionsGroup {
		key: string;
		transactions: Transaction[];
	}

	type TransactionType = 'expense' | 'income';
}
