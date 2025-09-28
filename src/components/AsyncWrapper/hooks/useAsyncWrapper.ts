import { useState } from 'react';

import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { useRouter } from 'next/navigation';

import type { ActionKeys } from '@/components/AsyncWrapper/types';

import { toast } from '@/shadcn/components';

export const useAsyncWrapper = () => {
	const router = useRouter();
	const [loaders, setLoaders] = useState<ActionKeys[]>([]);

	const onError = (error: unknown) => {
		if (isRedirectError(error)) {
			return;
		}

		const errorInstance = error instanceof Error;

		const message = errorInstance ? error.message : 'Something went wrong...';
		toast.error(message);
	};

	const onSuccess = () => {
		toast.success('Action completed successfully!');
		router.refresh();
	};

	const setLoader = (key: ActionKeys) => setLoaders(() => [...loaders, key]);
	const clearLoader = (key: ActionKeys) => () =>
		setLoaders(() => loaders.filter((loader) => loader !== key));

	const withLoader = <T extends unknown[], R>(
		key: ActionKeys,
		action: (...args: T) => Promise<R>,
	) => {
		return async (...args: T) => {
			setLoader(key);
			await action(...args)
				.then(onSuccess)
				.catch(onError)
				.finally(clearLoader(key));
		};
	};

	return { loaders, withLoader };
};
