import type React from 'react';

import type { TransactionsGroup } from '@/server/get';

import { Balance, SavingRate, Summary } from './components';

interface Props {
	transactions: TransactionsGroup[];
}

export const Charts: React.FC<Props> = ({ transactions }) => {
	const data = transactions.toReversed();
	return (
		<div className="p-2 w-full flex flex-col gap-2 overflow-auto">
			<SavingRate data={data} />
			<Summary data={data} />
			<Balance data={data} />
		</div>
	);
};
