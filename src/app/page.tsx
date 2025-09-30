import { SummaryPanel, Transactions } from '@/components';
import { getSettings, getTotalReport } from '@/server/get';

export const dynamic = 'force-dynamic';

export default async function Home() {
	const report = await getTotalReport();
	const settings = await getSettings();

	return (
		<Transactions settings={settings} transactions={report.items}>
			<SummaryPanel data={report} />
		</Transactions>
	);
}
