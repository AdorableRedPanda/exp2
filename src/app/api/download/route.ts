import { getTransactions } from '@/server/get';

const newId = () =>
	(Date.now() + Math.random())
		.toString(36)
		.replace(/[^a-zA-Z0-9\s-]/g, '')
		.slice(-6);

export async function GET() {
	const transactions = await getTransactions();

	const json = JSON.stringify(transactions, null, 2);

	const id = newId();

	return new Response(json, {
		headers: {
			'Content-Disposition': `attachment; filename="transactions_${id}.json"`,
			'Content-Type': 'application/json',
		},
		status: 200,
	});
}
