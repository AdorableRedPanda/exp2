'use server';

import type { Transaction } from '@/types';

import { buildGroups } from '@/server/get/getTransactions/utils';

import { prisma } from '../../prisma';

export const getTransactions = async () => {
	const data = await prisma.transaction.findMany({
		orderBy: {
			date: 'desc',
		},
	});

	const list = data.map(
		(t): Transaction => ({
			amount: t.amount,
			date: t.date,
			id: t.id,
			tags: t.tags,
			type: t.type,
		}),
	);

	return buildGroups(list);
};
