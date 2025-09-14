import { cn } from '@/lib/utils';

interface Props {
	transaction: Transaction;
}

export const TransactionItem: React.FC<Props> = ({ transaction }) => {
	const { amount, comment, date, type } = transaction;

	return (
		<div className="bg-background w-full	 gap-3 items-start flex justify-between min-h-14 p-2 border-b active:bg-gray-100 transition">
			<div className="w-full">
				<div className="flex overflow-hidden gap-2 intems-center">{date}</div>
				<span className="text-sm flex-1 text-right text-primary truncate">
					{comment}
				</span>
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
