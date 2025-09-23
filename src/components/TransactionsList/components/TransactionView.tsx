import type React from 'react';

import type { Transaction, TransactionType } from '@/types';

import { useOpenEdit } from '@/components/TransactionEditProvider';
import { Badge } from '@/shadcn/components';
import { cn } from '@/shadcn/utils';

import { getDateLabel } from '../utils';
import { TagsView } from './TagsView';

interface Props {
	transaction: Transaction;
}

const TextColor: Record<TransactionType, string> = {
	expense: 'text-red-800',
	income: 'text-green-700',
};

export const TransactionView: React.FC<Props> = ({ transaction }) => {
	const { amount, date, tags, type } = transaction;

	const { openEdit } = useOpenEdit(transaction);

	return (
		<button
			className="cursor-pointer bg-background w-full gap-3 items-start flex justify-between min-h-14 p-2 border-b transition"
			onClick={openEdit}
			type="button"
		>
			<div className="w-full flex flex-col gap-2">
				<Badge className="font-semibold" variant="outline">
					{getDateLabel(date)}
				</Badge>
				<TagsView tags={tags} />
			</div>

			<div className={cn('text-sm font-semibold px-2', TextColor[type])}>
				{amount}
			</div>
		</button>
	);
};
