export {};

declare global {
	type DateString = string;
	type ID = string;
	interface Transaction extends TransactionData {
		id: ID;
	}

	interface TransactionData {
		amount: number;
		comment: string;
		date: DateString;
		type: TransactionType;
	}

	interface TransactionsGroup {
		key: string;
		transactions: Transaction[];
	}

	type TransactionType = 'expense' | 'income';
}
