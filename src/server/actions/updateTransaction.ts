'use server';

import type { ID, TransactionData } from '@/types';

import { prisma } from '@/server/prisma';

import { withAuth } from './withAuth';

const _updateTransaction = async (id: ID, data: TransactionData) => {
	await prisma.transaction.update({ data, where: { id } });

	return data;
};

export const updateTransaction = withAuth(_updateTransaction);
