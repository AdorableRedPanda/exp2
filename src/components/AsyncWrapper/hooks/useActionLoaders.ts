import { use } from 'react';

import type { ActionKeys } from '@/components/AsyncWrapper/types';

import { AsyncCtx } from '@/components/AsyncWrapper/context';

export const useActionLoaders = (...keys: ActionKeys[]) => {
	const ctx = use(AsyncCtx);
	if (!ctx) {
		throw new Error('useLoaders must be used within an AsyncWrapper');
	}

	return keys.map((k) => ctx.loaders.includes(k));
};
