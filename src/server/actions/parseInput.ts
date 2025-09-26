'use server';

import type { Transaction } from '@/types';

import { getAuth } from '../getAuth';
import { llm } from '../llm';
import { prisma } from '../prisma';
import { txnFromAny } from '../utils';

export const parseInput = async (input: string): Promise<Transaction[]> => {
	const user = await getAuth();
	const settings = await prisma.settings.findUnique({
		where: { userId: user.id },
	});
	const parsed = await llm.parseTransaction(input, settings?.tags || []);

	const data = txnFromAny(parsed);

	const created = await prisma.transaction.create({
		data: { ...data, userId: user.id },
	});

	return [{ ...data, id: created.id }];
};
