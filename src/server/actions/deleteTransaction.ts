'use server';
import { withAuth } from '@/server/actions/withAuth';
import { prisma } from '@/server/prisma';

const _deleteTransaction = async (id: string) => {
	await prisma.transaction.delete({ where: { id } });

	return id;
};

export const deleteTransaction = withAuth(_deleteTransaction);
