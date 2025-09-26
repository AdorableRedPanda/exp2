import { cookies } from 'next/headers';

import { prisma } from '@/server/prisma';

export const getUser = async () => {
	const store = await cookies();
	const token = store.get('token')?.value || '';

	const user = await prisma.user.findFirst({ where: { token } });

	if (!user) {
		throw new Error('Not authenticated');
	}

	return user;
};
