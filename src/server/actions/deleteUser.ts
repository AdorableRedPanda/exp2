'use server';

import { redirect } from 'next/navigation';

import { getAuth } from '@/server/getAuth';
import { prisma } from '@/server/prisma';
import { withAuth } from '@/server/withAuth';

const _deleteUser = async () => {
	const user = await getAuth();

	await prisma.$transaction([
		prisma.transaction.deleteMany({ where: { userId: user.id } }),
		prisma.settings.deleteMany({ where: { userId: user.id } }),
		prisma.user.deleteMany({ where: { id: user.id } }),
	]);

	redirect('/login');
};

export const deleteUser = withAuth(_deleteUser);
