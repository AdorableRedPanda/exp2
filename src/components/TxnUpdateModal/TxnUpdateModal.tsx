import type React from 'react';

import type { ActionHandler, Transaction } from '@/types';

import { FormButtons, FormModal } from './componennts';
import { useTxnUpdates } from './hooks';

interface Props {
	onClose: ActionHandler;
	transaction: null | Transaction;
}

export const TxnUpdateModal: React.FC<Props> = ({ onClose, transaction }) => {
	const { onDelete, onSubmit } = useTxnUpdates(transaction, onClose);

	if (!transaction) {
		return null;
	}

	return (
		<FormModal onClose={onClose} onSubmit={onSubmit} transaction={transaction}>
			<FormButtons onDelete={onDelete} />
		</FormModal>
	);
};
