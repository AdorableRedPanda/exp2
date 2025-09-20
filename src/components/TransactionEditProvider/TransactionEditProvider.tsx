import type React from 'react';

import { TxnUpdateModal } from '@/components/TxnUpdateModal';

import { TxnEditCtx } from './context';
import { useTxnEditState } from './hooks';

export const TransactionEditProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { close, openEdit, state } = useTxnEditState();

	return (
		<TxnEditCtx value={openEdit}>
			{children}
			<TxnUpdateModal onClose={close} transaction={state} />
		</TxnEditCtx>
	);
};
