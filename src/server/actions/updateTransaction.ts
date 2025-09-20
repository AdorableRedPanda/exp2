'use server';

import type { ID, TransactionData } from '@/types';

import { prisma } from '@/server/prisma';

export const updateTransaction = async (id: ID, data: TransactionData) => {
	await prisma.transaction.update({ data, where: { id } });

	return data;
};
