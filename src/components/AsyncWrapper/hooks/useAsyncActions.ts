import { use } from 'react';

import { AsyncCtx } from '@/components/AsyncWrapper/context';

export const useAsyncActions = () => {
	const ctx = use(AsyncCtx);
	if (!ctx) {
		throw new Error('useAsyncActions must be used within an AsyncWrapper');
	}

	return ctx;
};
