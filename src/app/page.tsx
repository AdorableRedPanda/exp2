import { AppHeader, Transactions } from '@/components';
import { getAggregated, getTransactions } from '@/server/get';
import { SummaryCharts } from '@/components/SummaryCharts';
import { SavingsChart } from '@/components/SavingChart';
import { SavingsPercentChart } from '@/components/SavingsPercentChart';

export const dynamic = 'force-dynamic';

export default async function Home() {
	const transactions = await getTransactions();
	const summaries = await getAggregated();

	const averagePercent =
		summaries.reduce((accum, curr) => accum + curr.savingPercent, 0) /
		summaries.length;

	return (
		<div className="h-full w-full grid grid-rows-[auto_1fr] m-auto">
			<AppHeader />
			<main className="bg-muted overflow-hidden">
				<Transactions transactions={transactions}>
					<div className="p-2 w-full flex flex-col gap-2 overflow-auto">
						<SavingsPercentChart
							average={averagePercent}
							summaries={summaries}
						/>
						<SummaryCharts summaries={summaries} />
						<SavingsChart summaries={summaries} />
					</div>
				</Transactions>
			</main>
		</div>
	);
}
