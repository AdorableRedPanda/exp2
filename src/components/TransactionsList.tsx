import type React from 'react';

import { TextForm } from '@/components/TextForm';
import { TransactionItem } from '@/components/TransactionItem';
import { data } from '@/constants';

export const TransactionsList: React.FC = () => (
	<div className="h-full w-full grid grid-rows-[1fr_auto]">
		<ul className="list-none overflow-auto">
			{data.map((t) => (
				<li key={t.id}>
					<TransactionItem transaction={t} />
				</li>
			))}
		</ul>
		<TextForm onSubmit={console.error} />
	</div>
);
