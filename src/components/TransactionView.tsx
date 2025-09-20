import type React from 'react';

import type { Transaction } from '@/types';

import { useOpenEdit } from '@/components/TransactionEditProvider';
import { getDateLabel } from '@/server/utils';
import { Badge } from '@/shadcn/components';
import { cn } from '@/shadcn/utils';

import { TagsView } from './TagsView';

interface Props {
	transaction: Transaction;
}

export const TransactionView: React.FC<Props> = ({ transaction }) => {
	const { amount, date, tags, type } = transaction;

	const { openEdit } = useOpenEdit(transaction);

	return (
		<button
			className="bg-background w-full gap-3 items-start flex justify-between min-h-14 p-2 border-b transition"
			onDoubleClick={openEdit}
			type="button"
		>
			<div className="w-full flex flex-col gap-2">
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
		</button>
	);
};
