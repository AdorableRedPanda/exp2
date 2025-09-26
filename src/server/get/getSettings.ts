import type { SettingsDto } from '@/types';

import { prisma } from '@/server/prisma';

import { getAuth } from '../getAuth';
import { withAuth } from '../withAuth';

export const _getSettings = async (): Promise<SettingsDto> => {
	const { id } = await getAuth();
	const user = await prisma.user.findFirst({
		select: { email: true, settings: { select: { tags: true } } },
		where: { id },
	});

	const email = user?.email || '';
	const tags = user?.settings?.tags || [];

	return { email, tags };
};

export const getSettings = withAuth(_getSettings);
