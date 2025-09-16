import type { DateString, Transaction, TransactionData } from '@/types';

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

export const getDateLabel = (d: DateString) =>
	new Date(d).toLocaleDateString('en-GB', {
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		month: 'short',
	});

export const txnFromAny = (data: any): TransactionData => ({
	amount: Math.abs(data.amount),
	date: stringifyDate(new Date()),
	tags: data.tags,
	type: data.type,
});
