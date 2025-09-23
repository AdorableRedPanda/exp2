import { AppHeader, Charts, Transactions } from '@/components';
import { getMonthlyTransactions } from '@/server/get';

export const dynamic = 'force-dynamic';

export default async function Home() {
	const transactions = await getMonthlyTransactions();

	return (
		<div className="h-full w-full grid grid-rows-[auto_1fr] m-auto">
			<AppHeader />
			<main className="bg-muted overflow-hidden">
				<Transactions transactions={transactions}>
					<Charts transactions={transactions} />
				</Transactions>
			</main>
		</div>
	);
}
