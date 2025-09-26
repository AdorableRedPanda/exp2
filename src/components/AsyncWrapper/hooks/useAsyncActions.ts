import { use } from 'react';

import { AsyncCtx } from '@/components/AsyncWrapper/context';
import {
	deleteTransaction as _deleteTransaction,
	parseInput as _parseInput,
	updateSettings as _updateSettings,
	updateTransaction as _updateTransaction,
	uploadFiles as _uploadFiles,
} from '@/server/actions';

export const useAsyncActions = () => {
	const ctx = use(AsyncCtx);
	if (!ctx) {
		throw new Error('useAsyncActions must be used within an AsyncWrapper');
	}

	const deleteTransaction = ctx.withLoader('deleting', _deleteTransaction);
	const updateTransaction = ctx.withLoader('updating', _updateTransaction);
	const parseInput = ctx.withLoader('parsing', _parseInput);
	const uploadFiles = ctx.withLoader('uploading', _uploadFiles);
	const updateSettings = ctx.withLoader('settings', _updateSettings);
	return {
		deleteTransaction,
		parseInput,
		updateSettings,
		updateTransaction,
		uploadFiles,
	};
};
