import type React from 'react';

import type { TotalReport } from '@/server/get';

import { TotalCard } from '@/components/SummaryPanel/components/TotalCard';

import { Balance, SavingRate, Summary } from './components';

interface Props {
	data: TotalReport;
}

export const SummaryPanel: React.FC<Props> = ({ data: { months, total } }) => {
	return (
		<div className="p-2 w-full flex flex-col gap-2 overflow-auto">
			<TotalCard total={total} />
			<SavingRate data={months} />
			<Summary data={months} />
			<Balance data={months} />
		</div>
	);
};
