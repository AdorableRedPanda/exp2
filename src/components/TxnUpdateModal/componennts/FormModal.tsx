import type React from 'react';

import type { ActionHandler, Transaction, TransactionData } from '@/types';

import { TransactionForm } from '@/components/TransactionForm';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/shadcn/components';

export interface Props extends React.PropsWithChildren {
	onClose: ActionHandler;
	onSubmit: ActionHandler<TransactionData>;
	transaction: Transaction;
}

export const FormModal: React.FC<Props> = ({
	children,
	onClose,
	onSubmit,
	transaction,
}) => (
	<Dialog onOpenChange={onClose} open>
		<DialogContent className="max-w-lg">
			<DialogHeader>
				<DialogTitle>Edit transaction</DialogTitle>
			</DialogHeader>
			<TransactionForm data={transaction} onSubmit={onSubmit}>
				{children}
			</TransactionForm>
		</DialogContent>
	</Dialog>
);
