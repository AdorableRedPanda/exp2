import { useState } from 'react';

import type { ActionHandler, Transaction, TransactionData } from '@/types';

import { useAsyncWrapper } from '@/components/AsyncWrapper';
import { deleteTransaction, updateTransaction } from '@/server/actions';

export const useTxnUpdates = (
	t: null | Transaction,
	onClose: ActionHandler,
) => {
	const { onError, onSuccess: globalSuccess } = useAsyncWrapper();

	const [updating, setUpdating] = useState(false);
	const [deleting, setDeleting] = useState(false);

	const onSuccess = () => {
		globalSuccess();
		onClose();
	};

	const onSubmit = async (data: TransactionData) => {
		if (!t) {
			return;
		}
		setUpdating(true);
		updateTransaction(t.id, data)
			.then(onSuccess)
			.catch(onError)
			.finally(() => setUpdating(false));
	};

	const onDelete = async () => {
		if (!t) {
			return;
		}
		setDeleting(true);
		deleteTransaction(t.id)
			.then(onSuccess)
			.finally(() => setDeleting(false));
	};

	return { deleting, onDelete, onSubmit, updating };
};
