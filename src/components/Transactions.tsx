'use client';

import type React from 'react';

import type { Transaction } from '@/types';

import { AsyncWrapper } from './AsyncWrapper';
import { InputForm } from './InputForm';
import { TransactionEditProvider } from './TransactionEditProvider';
import { TransactionsList } from './TransactionsList';
import { TransactionsUpload } from './TransactionsUpload';

interface Props {
	transactions: Transaction[];
}

export const Transactions: React.FC<Props> = ({ transactions }) => (
	<AsyncWrapper>
		<TransactionEditProvider>
			<TransactionsUpload>
				<div className="h-full w-full grid grid-rows-[1fr_auto]">
					<TransactionsList transactions={transactions} />
					<InputForm />
				</div>
			</TransactionsUpload>
		</TransactionEditProvider>
	</AsyncWrapper>
);
