'use server';

import type { Transaction } from '@/types';

import { llm } from '../llm';
import { prisma } from '../prisma';
import { txnFromAny } from '../utils';

export const handleInput = async (input: string): Promise<Transaction[]> => {
	const parsed = await llm.parseTransaction(input);

	const data = txnFromAny(parsed as {});
	// todo: use special type of support iso on frontend
	const date = new Date();

	const created = await prisma.transaction.create({
		data: { ...data, date },
	});

	return [{ ...data, id: created.id }];
};
