import { Charts, Transactions } from '@/components';
import { getMonthlyTransactions, getSettings } from '@/server/get';

export const dynamic = 'force-dynamic';

export default async function Home() {
	const transactions = await getMonthlyTransactions();
	const settings = await getSettings();

	return (
		<div className="h-full w-full grid grid-rows-[auto_1fr] m-auto">
			<main className="bg-muted overflow-hidden">
				<Transactions settings={settings} transactions={transactions}>
					<Charts transactions={transactions} />
				</Transactions>
			</main>
		</div>
	);
}
