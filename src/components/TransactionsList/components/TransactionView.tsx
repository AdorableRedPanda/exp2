import type React from 'react';

import { Edit } from 'lucide-react';

import type { Transaction, TransactionType } from '@/types';

import { useOpenEdit } from '@/components/TransactionEditProvider';
import { Badge } from '@/shadcn/components';
import { cn } from '@/shadcn/utils';
import { formatAmount } from '@/utils';

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

	const sign = type === 'income' ? 1 : -1;
	const value = formatAmount(sign * amount);

	const { openEdit } = useOpenEdit(transaction);

	return (
		<div className="group bg-background w-full gap-3 items-start flex justify-between min-h-14 p-2 border-b">
			<div className="w-full h-full flex flex-col gap-2">
				<Badge className="font-semibold" variant="outline">
					{getDateLabel(date)}
				</Badge>
				<TagsView tags={tags} />
			</div>
			<div className="flex-0 flex flex-col items-end justify-between gap-2">
				<div className={cn('text-sm font-semibold px-2', TextColor[type])}>
					{value}
				</div>
				<button
					className="group-hover:opacity-100 sm:opacity-0 duration-400 transition cursor-pointer p-1"
					onClick={openEdit}
					type="button"
				>
					<Edit className="size-4" />
				</button>
			</div>
		</div>
	);
};
