import type React from 'react';

import type { Transaction } from '@/types';

import { TransactionView } from '@/components/TransactionView';

interface Props {
	transactions: Transaction[];
}

export const TransactionsList: React.FC<Props> = ({ transactions }) => (
	<ul className="list-none overflow-auto">
		{transactions.map((t) => (
			<li key={t.id}>
				<TransactionView transaction={t} />
			</li>
		))}
	</ul>
);
