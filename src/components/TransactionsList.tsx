import type React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTransition } from 'react';

import { Loader, SendHorizontal } from 'lucide-react';

import type { Transaction } from '@/types';

import { Button } from '@/lib/components';
import { parseInput } from '@/server/parseInput';
import { getAll } from '@/server/txns';

import { TextForm } from './TextForm';
import { TransactionView } from './TransactionView';

export const useList = () => {
	const [state, setState] = useState<Transaction[]>([]);
	const [loading, startTransition] = useTransition();

	useEffect(() => {
		getAll().then(setState);
	}, []);

	const addItem = (t: Transaction) => setState((prev) => [t, ...prev]);

	const parse = (input: string) => {
		startTransition(() => parseInput(input).then(addItem));
	};

	return { loading, parse, state };
};

export const TransactionsList: React.FC = () => {
	const { loading, parse, state } = useList();

	return (
		<div className="h-full w-full grid grid-rows-[1fr_auto]">
			<ul className="list-none overflow-auto">
				{state.map((t) => (
					<li key={t.id}>
						<TransactionView transaction={t} />
					</li>
				))}
			</ul>
			<TextForm onSubmit={parse}>
				<Button disabled={loading} type="submit">
					{loading && <Loader className="animate-spin" />}
					{!loading && <SendHorizontal />}
				</Button>
			</TextForm>
		</div>
	);
};
