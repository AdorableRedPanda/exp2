import { Transactions } from '@/components';
import { getMonthlyTransactions, getSettings } from '@/server/get';

export const dynamic = 'force-dynamic';

export default async function Home() {
	const transactions = await getMonthlyTransactions();
	const settings = await getSettings();

	return <Transactions settings={settings} transactions={transactions} />;
}
