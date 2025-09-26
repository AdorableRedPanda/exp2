'use server';

import type { Transaction } from '@/types';

import { getAuth } from '../getAuth';
import { llm } from '../llm';
import { prisma } from '../prisma';
import { txnFromAny } from '../utils';

export const parseInput = async (input: string): Promise<Transaction[]> => {
	const parsed = await llm.parseTransaction(input);
	const user = await getAuth();

	const data = txnFromAny(parsed as {});

	const created = await prisma.transaction.create({
		data: { ...data, userId: user.id },
	});

	return [{ ...data, id: created.id }];
};
