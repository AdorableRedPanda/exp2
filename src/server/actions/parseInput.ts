'use server';

import { parseTxnData } from '@/utils';

import { getAuth } from '../getAuth';
import { llm } from '../llm';
import { prisma } from '../prisma';

export const parseInput = async (input: string) => {
	const user = await getAuth();
	const settings = await prisma.settings.findUnique({
		where: { userId: user.id },
	});
	const parsed = await llm.parseTransaction(input, settings?.tags || []);

	const data = parseTxnData(parsed);

	await prisma.transaction.create({
		data: { ...data, userId: user.id },
	});
};
