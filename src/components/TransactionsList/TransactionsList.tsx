import type React from 'react';

import type { TransactionsGroup } from '@/server/get';

import { GroupView } from './components';

interface Props {
	transactions: TransactionsGroup[];
}

export const TransactionsList: React.FC<Props> = ({ transactions }) => (
	<ul className="list-none overflow-auto">
		{transactions.map((g) => (
			<li key={g.key}>
				<GroupView group={g} />
			</li>
		))}
	</ul>
);
