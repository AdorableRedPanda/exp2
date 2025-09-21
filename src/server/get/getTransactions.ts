'use server';

import type { Transaction } from '@/types';

import { prisma } from '../prisma';

export const getTransactions = async () => {
	const data = await prisma.transaction.findMany({
		orderBy: {
			date: 'desc',
		},
	});

	return data.map(
		(t): Transaction => ({
			amount: t.amount,
			date: t.date,
			id: t.id,
			tags: t.tags,
			type: t.type,
		}),
	);
};
