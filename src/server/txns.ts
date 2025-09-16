'use server';

import type { Transaction } from '@/types';

import { prisma } from './prisma';
import { stringifyDate } from './utils';

export const getAll = async () => {
	const data = await prisma.transaction.findMany({});

	return data.map(
		(t): Transaction => ({
			amount: t.amount,
			date: stringifyDate(t.date),
			id: t.id,
			tags: t.tags,
			type: t.type,
		}),
	);
};
