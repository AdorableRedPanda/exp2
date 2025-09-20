import { use, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
	deleteTransaction as _deleteTransaction,
	parseInput as _parseInput,
	updateTransaction as _updateTransaction,
	uploadFiles as _uploadFiles,
} from '@/server/actions';
import { toast } from '@/shadcn/components';

import { AsyncCtx } from './context';

export const useAsyncWrapper = () => {
	const router = useRouter();
	const [loaders, setLoaders] = useState<string[]>([]);

	const onError = () => toast.error('Something went wrong...');
	const onSuccess = () => {
		router.refresh();
	};

	const setLoader = (key: string) => setLoaders(() => [...loaders, key]);
	const clearLoader = (key: string) => () =>
		setLoaders(() => loaders.filter((loader) => loader !== key));

	const withLoader = <T extends unknown[], R>(
		key: string,
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

export const useActionsValue = () => {
	const { loaders, withLoader } = useAsyncWrapper();

	return {
		deleteTransaction: withLoader('deleting', _deleteTransaction),
		loaders,
		parseInput: withLoader('parsing', _parseInput),
		updateTransaction: withLoader('updating', _updateTransaction),
		uploadFiles: withLoader('uploading', _uploadFiles),
	};
};

export const useActionLoaders = (...keys: string[]) => {
	const ctx = use(AsyncCtx);
	if (!ctx) {
		throw new Error('useLoaders must be used within an AsyncWrapper');
	}

	return keys.map((k) => ctx.loaders.includes(k));
};

export const useAsyncActions = () => {
	const ctx = use(AsyncCtx);
	if (!ctx) {
		throw new Error('useAsyncActions must be used within an AsyncWrapper');
	}

	const deleteTransaction = ctx.withLoader('deleting', _deleteTransaction);
	const updateTransaction = ctx.withLoader('updating', _updateTransaction);
	const parseInput = ctx.withLoader('parsing', _parseInput);
	const uploadFiles = ctx.withLoader('uploading', _uploadFiles);
	return {
		deleteTransaction,
		parseInput,
		updateTransaction,
		uploadFiles,
	};
};
