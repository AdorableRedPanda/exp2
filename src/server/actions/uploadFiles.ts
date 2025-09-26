'use server';

import { getUser } from '@/server/actions/getUser';
import { prisma } from '@/server/prisma';

import { parseFiles } from '../utils';

export const uploadFiles = async (files: File[]) => {
	const user = await getUser();
	const newData = await parseFiles(files);

	const createInputs = newData.map((txn) => ({ ...txn, userId: user.id }));

	await prisma.transaction.createMany({ data: createInputs });
};
