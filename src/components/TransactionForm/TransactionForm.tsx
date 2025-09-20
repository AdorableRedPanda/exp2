import type React from 'react';

import type { TransactionData } from '@/types';

import { Input } from '@/shadcn/components';

import { TagsInput, TypeInput } from './components';
import { parseFormData } from './utils';

interface Props extends React.PropsWithChildren {
	data: TransactionData;
	onSubmit: (data: TransactionData) => void;
}

export const TransactionForm: React.FC<Props> = ({
	children,
	data: { amount, date, tags, type },
	onSubmit,
}) => {
	const handleSubmit: React.FormEventHandler = (ev) => {
		const form = ev.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		ev.preventDefault();

		onSubmit(parseFormData(data));
	};

	return (
		<form className="space-y-4 p-2" onSubmit={handleSubmit}>
			<div className="flex flex-col gap-3 mb-6">
				<div className="grid grid-cols-[3fr_4fr] gap-3">
					<Input defaultValue={amount} name="amount" type="decimal" />
					<Input defaultValue={date} name="date" type="datetime-local" />
				</div>
				<TypeInput value={type} />
				<TagsInput value={tags} />
			</div>
			{children}
		</form>
	);
};
