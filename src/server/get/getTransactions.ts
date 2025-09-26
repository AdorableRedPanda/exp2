'use server';

import type { Transaction } from '@/types';

import { prisma } from '@/server/prisma';

import { getUser } from '../actions/getUser';
import { withAuth } from '../actions/withAuth';

const _getTransactions = async (): Promise<Transaction[]> => {
	const user = await getUser();
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
