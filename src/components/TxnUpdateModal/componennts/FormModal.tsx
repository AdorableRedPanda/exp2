import type React from 'react';

import type { ActionHandler, Transaction, TransactionData } from '@/types';

import { TransactionForm } from '@/components/TransactionForm';
import {
	Dialog,
	DialogContent,
	DialogDescription,
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
		<DialogContent className="max-w-lg [&>button]:hidden pb-3">
			<DialogHeader className="text-left">
				<DialogTitle>Edit transaction</DialogTitle>
			</DialogHeader>
			<DialogDescription className="hidden">
				Make changes to the transaction and click save when you are done.
			</DialogDescription>
			<TransactionForm data={transaction} onSubmit={onSubmit}>
				{children}
			</TransactionForm>
		</DialogContent>
	</Dialog>
);
