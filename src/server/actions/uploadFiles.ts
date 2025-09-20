'use server';

import { prisma } from '@/server/prisma';

import { parseFiles } from '../utils';

export const uploadFiles = async (files: File[]) => {
	const newData = await parseFiles(files);

	await prisma.transaction.createMany({ data: newData });
};
