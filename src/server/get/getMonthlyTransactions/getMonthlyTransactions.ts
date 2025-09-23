'use server';

import { getTransactions } from '@/server/get';

import { buildGroups } from './utils';

export const getMonthlyTransactions = async () => {
	return getTransactions().then(buildGroups);
};
