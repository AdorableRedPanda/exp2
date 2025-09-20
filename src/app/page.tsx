import { AppHeader } from '@/components';
import { TransactionsList } from '@/components/TransactionsList';
import { getTransactions } from '@/server/get';

export default async function Home() {
	const transactions = await getTransactions();
	return (
		<div className="h-full w-full max-w-xl grid grid-rows-[auto_1fr] m-auto">
			<AppHeader />
			<main className="bg-background overflow-hidden">
				<TransactionsList transactions={transactions} />
			</main>
		</div>
	);
}
