import type React from 'react';

import type { TransactionsGroup } from '@/server/get';

import { TransactionView } from './TransactionView';

interface Props {
	group: TransactionsGroup;
}

export const GroupView: React.FC<Props> = ({ group }) => (
	<ul className="list-none bg-background">
		{group.items.map((t) => (
			<li className="contents" key={t.id}>
				<TransactionView transaction={t} />
			</li>
		))}
	</ul>
);
