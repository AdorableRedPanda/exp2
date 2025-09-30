import type { Transaction } from '@/types';

import { buildSummary } from './buildSummary';
import { getMonthKey } from './getMonthKey';

export const buildGroups = (items: Transaction[]) => {
	const groups = Object.groupBy(items, getMonthKey);

	const keys = Object.keys(groups).sort((a, b) => (a > b ? 1 : -1));

	return keys.map((k) => buildSummary(groups[k] || []));
};
