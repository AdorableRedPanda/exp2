import { cookies } from 'next/headers';

import { TOKEN_COOKIE } from '@/server/constants';
import { prisma } from '@/server/prisma';

export const getAuth = async () => {
	const store = await cookies();
	const token = store.get(TOKEN_COOKIE)?.value || '';

	const user = await prisma.user.findFirst({ where: { token } });

	if (!user) {
		throw new Error('Not authenticated');
	}

	return user;
};
