import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { TOKEN_COOKIE } from '@/server/constants';
import { prisma } from '@/server/prisma';

export function withAuth<ActionArgs extends unknown[], ActionReturn>(
	action: (...args: ActionArgs) => Promise<ActionReturn>,
) {
	return async (...args: ActionArgs): Promise<ActionReturn> => {
		const store = await cookies();
		const token = store.get(TOKEN_COOKIE)?.value || '';
		const user = await prisma.user.findFirst({ where: { token } });

		if (!user) {
			redirect('/login');
		}

		return action(...args);
	};
}
