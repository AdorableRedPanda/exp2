import type { TransactionData } from '@/types';

import { parseTxnData } from './parseTxnData';

export const parseFile = async (file: File): Promise<TransactionData[]> => {
	const text = await file.text();
	const json = JSON.parse(text);

	if (!Array.isArray(json)) {
		throw 'Invalid file format: expected an array of transactions';
	}

	return json.map(parseTxnData);
};
