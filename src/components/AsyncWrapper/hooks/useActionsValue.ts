import {
	deleteTransaction as _deleteTransaction,
	deleteUser as _deleteUser,
	logoutAction as _logoutAction,
	parseInput as _parseInput,
	updateSettings as _updateSettings,
	updateTransaction as _updateTransaction,
	uploadFiles as _uploadFiles,
} from '@/server/actions';

import { useAsyncWrapper } from './useAsyncWrapper';

export const useActionsValue = () => {
	const { loaders, withLoader } = useAsyncWrapper();

	const deleteTransaction = withLoader('deleting', _deleteTransaction);
	const updateTransaction = withLoader('updating', _updateTransaction);
	const parseInput = withLoader('parsing', _parseInput);
	const uploadFiles = withLoader('uploading', _uploadFiles);
	const updateSettings = withLoader('settings', _updateSettings);
	const logoutAction = withLoader('logout', _logoutAction);
	const deleteUser = withLoader('user_deleting', _deleteUser);

	return {
		deleteTransaction,
		deleteUser,
		loaders,
		logoutAction,
		parseInput,
		updateSettings,
		updateTransaction,
		uploadFiles,
	};
};
