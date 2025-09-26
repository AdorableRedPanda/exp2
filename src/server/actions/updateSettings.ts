'use server';

import { prisma } from '@/server/prisma';

import { getAuth } from '../getAuth';
import { withAuth } from '../withAuth';

const _updateSettings = async (tags: string[]) => {
	const user = await getAuth();
	await prisma.settings.update({
		data: { tags },
		where: {
			userId: user.id,
		},
	});
};

export const updateSettings = withAuth(_updateSettings);
