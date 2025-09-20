import type { ActionHandler, Transaction, TransactionData } from '@/types';

import { useAsyncActions } from '@/components/AsyncWrapper';

export const useTxnUpdates = (
	t: null | Transaction,
	onClose: ActionHandler,
) => {
	const { deleteTransaction, updateTransaction } = useAsyncActions();

	const onSubmit = (data: TransactionData) => {
		if (!t) {
			return;
		}
		updateTransaction(t.id, data).then(onClose);
	};

	const onDelete = () => {
		if (!t) {
			return;
		}
		deleteTransaction(t.id).then(onClose);
	};

	return { onDelete, onSubmit };
};
