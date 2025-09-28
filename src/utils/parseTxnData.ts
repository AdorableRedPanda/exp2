import type { TransactionData } from '@/types';

import { isValidAmount } from '@/utils/isValidAmount';

import { isObject } from './isObject';
import { parseAmount } from './parseAmount';
import { parseDate } from './parseDate';
import { parseTags } from './parseTags';
import { parseType } from './parseType';

export const parseTxnData = (t: unknown): TransactionData => {
	if (!isObject(t)) {
		throw 'Invalid input format';
	}

	const rawAmount = parseAmount(t.amount);
	if (!isValidAmount(rawAmount)) {
		throw 'Cannot parse amount';
	}

	const date = t.date ? parseDate(t.date) : new Date();
	const type = parseType(t.type, rawAmount);
	const tags = parseTags(t.tags);
	const amount = Math.abs(rawAmount);

	return { amount, date, tags, type };
};
