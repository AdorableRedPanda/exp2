'use server';

import type { Transaction } from '@/types';

import { prisma } from '@/server/prisma';

import { getAuth } from '../getAuth';
import { withAuth } from '../withAuth';

const _getTransactions = async (): Promise<Transaction[]> => {
	const user = await getAuth();
	const data = await prisma.transaction.findMany({
		orderBy: {
			date: 'desc',
		},
		where: { userId: user.id },
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

export const getTransactions = withAuth(_getTransactions);
