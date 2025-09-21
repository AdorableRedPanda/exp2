'use server';

import type { Transaction } from '@/types';

import { llm } from '../llm';
import { prisma } from '../prisma';
import { txnFromAny } from '../utils';

export const parseInput = async (input: string): Promise<Transaction[]> => {
	const parsed = await llm.parseTransaction(input);

	const data = txnFromAny(parsed as {});

	const created = await prisma.transaction.create({
		data: { ...data },
	});

	return [{ ...data, id: created.id }];
};
