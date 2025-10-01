import type React from 'react';

import { BarChart2, HandCoins, Percent, Wallet } from 'lucide-react';

import type { TotalSummary } from '@/server/get';

import { formatAmount } from '@/utils';

import { StatItem } from './StatItem';
import { SummaryCard } from './SummaryCard';

interface Props {
	total: TotalSummary;
}

export const TotalCard: React.FC<Props> = ({
	total: { averageExpenses, averageSaving, balance, medianExpenses },
}) => (
	<SummaryCard>
		<div className="w-full flex flex-wrap gap-4">
			<StatItem title="Balance" value={formatAmount(balance)}>
				<Wallet className="w-5 h-5" />
			</StatItem>

			<StatItem title="Average expenses" value={formatAmount(averageExpenses)}>
				<HandCoins className="w-5 h-5" />
			</StatItem>

			<StatItem title="Median expenses" value={formatAmount(medianExpenses)}>
				<BarChart2 className="w-5 h-5" />
			</StatItem>

			<StatItem title="Average saving rate" value={`${averageSaving}%`}>
				<Percent className="w-5 h-5" />
			</StatItem>
		</div>
	</SummaryCard>
);
