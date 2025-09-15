'use server';

import { prisma } from '@/server/prisma';
import { stringifyDate } from '@/server/utils';
import type { Transaction, TransactionData } from '@/types';

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

export const create = async (data: TransactionData): Promise<Transaction> => {
	const result = await prisma.transaction.create({
		data,
	});

	return <Transaction>{ ...data, id: result.id };
};
