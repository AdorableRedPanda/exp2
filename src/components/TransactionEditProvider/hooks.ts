import { use, useState } from 'react';

import type { Transaction } from '@/types';

import { TxnEditCtx } from '@/components/TransactionEditProvider/context';

export const useTxnEditState = () => {
	const [state, setState] = useState<null | Transaction>(null);

	const close = () => setState(null);
	const openEdit = (txn: Transaction) => setState(txn);

	return { close, openEdit, state };
};

export const useOpenEdit = (t: Transaction) => {
	const ctx = use(TxnEditCtx);

	const openEdit = () => {
		ctx?.(t);
	};

	return { openEdit };
};
