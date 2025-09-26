import { parseTxnData } from '@/utils';

export const parseFormData = (data: FormData) => {
	const tags = data.get('tags');
	const amount = data.get('amount');
	const type = data.get('type');
	const date = data.get('date');

	return parseTxnData({ amount, date, tags, type });
};

export const stringifyDate = (d: Date) => {
	const date = d.toLocaleDateString('en-CA');
	const time = d.toLocaleTimeString('default', {
		hour: '2-digit',
		hour12: false,
		minute: '2-digit',
	});

	return `${date}T${time}`;
};
