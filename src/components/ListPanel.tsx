import type React from 'react';

import type { Transaction } from '@/types';

import { InputForm } from '@/components/InputForm';
import { TransactionsList } from '@/components/TransactionsList';

interface Props {
	transactions: Transaction[];
}

export const ListPanel: React.FC<Props> = ({ transactions }) => (
	<div className="bg-background overflow-hidden h-full grid grid-rows-[1fr_auto]">
		<TransactionsList transactions={transactions} />
		<InputForm />
	</div>
);
