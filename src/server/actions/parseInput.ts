'use server';

import type { Transaction } from '@/types';

import { llm } from '../llm';
import { prisma } from '../prisma';
import { txnFromAny } from '../utils';
import { getUser } from './getUser';

export const parseInput = async (input: string): Promise<Transaction[]> => {
	const parsed = await llm.parseTransaction(input);
	const user = await getUser();

	const data = txnFromAny(parsed as {});

	const created = await prisma.transaction.create({
		data: { ...data, userId: user.id },
	});

	return [{ ...data, id: created.id }];
};
