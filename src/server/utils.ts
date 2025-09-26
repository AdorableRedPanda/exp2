import { nanoid } from 'nanoid';

import type { TransactionData } from '@/types';

export const parseAmount = (amount: unknown): number => {
	if (typeof amount === 'number') {
		return amount;
	}

	if (typeof amount === 'string') {
		return Number.parseFloat(amount);
	}

	return Number.NaN;
};

export const parseType = (type: unknown, amount: number) => {
	if (type === 'income' || type === 'expense') {
		return type;
	}

	if (amount < 0) {
		return 'expense';
	}

	return 'income';
};

export const parseTags = (t: unknown): string[] => {
	if (Array.isArray(t)) {
		return t.map((s) => s.toString().trim()).filter(Boolean);
	}

	if (typeof t === 'string') {
		return t
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);
	}

	return [];
};
type ParseArg = Record<string, unknown>;
export const txnFromAny = (t: Record<string, unknown>): TransactionData => {
	if (!isObject(t)) {
		throw new Error('Invalid transaction format');
	}

	const date = t.date ? parseDate(t.date) : new Date();
	const rawAmount = parseAmount(t.amount);
	const type = parseType(t.type, rawAmount);
	const tags = parseTags(t.tags);
	const amount = Math.abs(rawAmount);

	return { amount, date, tags, type };
};
export const parseDate = (t: unknown) => {
	if (!t || typeof t !== 'string') {
		return new Date('invalid-date');
	}

	return new Date(t);
};

export const isObject = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null && !Array.isArray(value);

export const parseFile = async (file: File): Promise<TransactionData[]> => {
	const text = await file.text();
	const json = JSON.parse(text);

	if (!Array.isArray(json)) {
		throw new Error('Invalid file format: expected an array of transactions');
	}

	return json.map(txnFromAny);
};

export const parseFiles = async (files: File[]): Promise<TransactionData[]> => {
	const result: TransactionData[] = [];

	for await (const f of files) {
		const transactions = await parseFile(f);
		result.push(...transactions);
	}

	return result;
};

export const parseAny = (arg: ParseArg) => txnFromAny(arg);

export const buildToken = () => nanoid();
