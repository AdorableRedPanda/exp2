import { parseAny } from '@/server/utils';

export const parseFormData = (data: FormData) => {
	const tags = data.get('tags');
	const amount = data.get('amount');
	const type = data.get('type');
	const date = data.get('date');

	return parseAny({ amount, date, tags, type });
};
