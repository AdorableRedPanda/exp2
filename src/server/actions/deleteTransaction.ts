'use server';
import { prisma } from '@/server/prisma';

export const deleteTransaction = async (id: string) => {
	await prisma.transaction.delete({ where: { id } });

	return id;
};
