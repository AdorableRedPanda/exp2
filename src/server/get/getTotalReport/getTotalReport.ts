'use server';

import { getTransactions } from '@/server/get';

import { buildReport } from './utils';

export const getTotalReport = async () => getTransactions().then(buildReport);
