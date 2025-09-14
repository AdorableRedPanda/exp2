import type React from 'react';

import { Badge } from '@/lib/components';
import { cn } from '@/lib/utils';
import { getDateLabel } from '@/server';

import { TagsView } from './TagsView';

interface Props {
	transaction: Transaction;
}

export const TransactionView: React.FC<Props> = ({ transaction }) => {
	const { amount, date, tags, type } = transaction;

	return (
		<div className="bg-background w-full gap-3 items-start flex justify-between min-h-14 p-2 border-b transition">
			<div className="w-full">
				<Badge className="font-semibold" variant="outline">
					{getDateLabel(date)}
				</Badge>
				<TagsView tags={tags} />
			</div>

			<div
				className={cn(
					'text-sm font-semibold px-2',
					type === 'income' && 'text-green-700',
					type === 'expense' && 'text-red-800',
				)}
			>
				{amount}
			</div>
		</div>
	);
};
