'use client';

import type React from 'react';

import type { TransactionsGroup } from '@/server/get';

import { AsyncWrapper } from './AsyncWrapper';
import { InputForm } from './InputForm';
import { TransactionEditProvider } from './TransactionEditProvider';
import { TransactionsList } from './TransactionsList';
import { TransactionsUpload } from './TransactionsUpload';

interface Props extends React.PropsWithChildren {
	transactions: TransactionsGroup[];
}

export const Transactions: React.FC<Props> = ({ children, transactions }) => (
	<AsyncWrapper>
		<TransactionEditProvider>
			<TransactionsUpload>
				<div className="overflow-hidden h-full w-full grid grid-cols-[380px_1fr]">
					<div className="bg-background overflow-hidden  grid grid-rows-[1fr_auto]">
						<TransactionsList transactions={transactions} />
						<InputForm />
					</div>
					{children}
				</div>
			</TransactionsUpload>
		</TransactionEditProvider>
	</AsyncWrapper>
);
