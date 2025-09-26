'use server';

import { prisma } from '@/server/prisma';

import { getAuth } from '../getAuth';
import { parseFiles } from '../utils';

export const uploadFiles = async (files: File[]) => {
	const user = await getAuth();
	const newData = await parseFiles(files);

	const createInputs = newData.map((txn) => ({ ...txn, userId: user.id }));

	await prisma.transaction.createMany({ data: createInputs });
};
