import { use } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from '@/shadcn/components';

import { WrapperCtx } from './context';

export const useWrapperValue = () => {
	const router = useRouter();

	const onError = () => toast.error('Something went wrong...');
	const onSuccess = () => {
		router.refresh();
	};

	return { onError, onSuccess };
};

export const useAsyncWrapper = () => {
	const ctx = use(WrapperCtx);

	if (!ctx) {
		throw new Error('useAsyncWrapper must be used within a AsyncWrapper');
	}

	return ctx;
};
