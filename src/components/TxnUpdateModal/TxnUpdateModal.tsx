import type React from 'react';

import type { ActionHandler, Transaction, TransactionData } from '@/types';

import { FormButtons } from '@/components/TxnUpdateModal/componennts/FormButtons';
import { deleteTransaction, updateTransaction } from '@/server/actions';

import { FormModal } from './componennts';

interface Props {
	onClose: ActionHandler;
	transaction: null | Transaction;
}

export const TxnUpdateModal: React.FC<Props> = ({ onClose, transaction }) => {
	if (!transaction) {
		return null;
	}

	const onDelete = () => {
		deleteTransaction(transaction.id).then(onClose);
	};

	const onSubmit = (data: TransactionData) => {
		updateTransaction(transaction.id, data).then(onClose);
	};

	return (
		<FormModal onClose={onClose} onSubmit={onSubmit} transaction={transaction}>
			<FormButtons onDelete={onDelete} />
		</FormModal>
	);
};
