'use server';

import { getAuth } from '@/server/getAuth';
import { prisma } from '@/server/prisma';
import { withAuth } from '@/server/withAuth';

const _deleteTransaction = async (id: string) => {
	const user = await getAuth();
	await prisma.transaction.delete({ where: { id, userId: user.id } });

	return id;
};

export const deleteTransaction = withAuth(_deleteTransaction);
