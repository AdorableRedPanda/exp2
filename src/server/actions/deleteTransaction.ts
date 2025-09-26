'use server';
import { prisma } from '@/server/prisma';
import { withAuth } from '@/server/withAuth';

const _deleteTransaction = async (id: string) => {
	await prisma.transaction.delete({ where: { id } });

	return id;
};

export const deleteTransaction = withAuth(_deleteTransaction);
