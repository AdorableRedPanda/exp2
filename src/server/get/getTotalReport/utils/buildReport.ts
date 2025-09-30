import type { Transaction } from '@/types';

import type { TotalReport } from '../types';

import { buildGroups } from './buildGroups';
import { buildTotal } from './buildTotal';

export const buildReport = (items: Transaction[]): TotalReport => {
	const months = buildGroups(items);

	return {
		items,
		months,
		total: buildTotal(months),
	};
};
