import { AppHeader, Transactions } from '@/components';
import { getAggregated, getTransactions } from '@/server/get';

export const dynamic = 'force-dynamic';

export default async function Home() {
	const transactions = await getTransactions();
	const charts = await getAggregated();

	console.log(charts);

	return (
		<div className="h-full w-full max-w-xl grid grid-rows-[auto_1fr] m-auto">
			<AppHeader />
			<main className="bg-background overflow-hidden">
				<Transactions transactions={transactions} />
			</main>
		</div>
	);
}
