import { AppHeader, Transactions } from '@/components';
import { getTransactions } from '@/server/get';

export default async function Home() {
	const transactions = await getTransactions();
	return (
		<div className="h-full w-full max-w-xl grid grid-rows-[auto_1fr] m-auto">
			<AppHeader />
			<main className="bg-background overflow-hidden">
				<Transactions transactions={transactions} />
			</main>
		</div>
	);
}
