'use client';

import { AppHeader } from '@/components';
import { TransactionsList } from '@/components/TransactionsList';

export default function Home() {
	return (
		<div className="h-full w-full max-w-xl grid grid-rows-[auto_1fr] m-auto">
			<AppHeader />
			<main className="bg-background overflow-hidden">
				<TransactionsList />
			</main>
		</div>
	);
}
