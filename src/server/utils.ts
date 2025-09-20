import type { Transaction, TransactionData } from '@/types';

export const stringifyDate = (d: Date) => {
	const date = d.toLocaleDateString('en-CA');
	const time = d.toLocaleTimeString('default', {
		hour: '2-digit',
		hour12: false,
		minute: '2-digit',
	});

	return `${date}T${time}`;
};

export const newId = () => {
	const uuid = crypto.randomUUID();
	const hex = uuid.replace(/-/g, '');

	return BigInt(`0x${hex}`).toString(36);
};

export const buildTransaction = (
	data: Partial<TransactionData>,
): Transaction => ({
	amount: 0,
	// @ts-expect-error
	date: new Date(),
	id: newId(),
	tags: [],
	type: 'expense',
	...data,
});

export const getDateLabel = (d: string) =>
	new Date(d).toLocaleDateString('en-GB', {
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		month: 'short',
	});

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

export const txnFromAny = (t: Record<string, unknown>): TransactionData => {
	if (!isObject(t)) {
		throw new Error('Invalid transaction format');
	}

	const rawDate = t.date ? parseDate(t.date) : new Date();
	const date = rawDate.toISOString();
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
