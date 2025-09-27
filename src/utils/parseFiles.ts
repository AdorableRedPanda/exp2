import type { TransactionData } from '@/types';

import { parseFile } from './parseFile';

export const parseFiles = async (files: File[]): Promise<TransactionData[]> => {
	const result: TransactionData[] = [];

	for await (const f of files) {
		const transactions = await parseFile(f);
		result.push(...transactions);
	}

	return result;
};
