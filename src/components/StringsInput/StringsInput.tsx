import type React from 'react';

import type { ActionHandler } from '@/types';

import { cn } from '@/shadcn/utils';

import { ElementInput, ElementsList } from './components';
import { useStringsState } from './hooks';

interface Props {
	onChange: ActionHandler<string[]>;
	placeholder: string;
	value: string[];
}

const className = cn(
	'relative',
	'flex items-center gap-2 flex-wrap',
	'min-w-0 w-full px-2 py-1 min-h-9',
	'dark:bg-input/30 bg-transparent shadow-xs transition-[color,box-shadow]',
	'outline-none rounded-md border transition-[color,box-shadow] border-input focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
	'selection:bg-primary selection:text-primary-foreground dark:bg-input/30',
);

export const StringsInput: React.FC<Props> = ({
	onChange,
	placeholder,
	value,
}) => {
	const { handleBlur, input, onKey, removeValue, setInput } = useStringsState(
		value,
		onChange,
	);

	return (
		<div className={className}>
			<ElementsList onRemove={removeValue} tags={value} />
			<ElementInput
				onBlur={handleBlur}
				onChange={setInput}
				onKey={onKey}
				placeholder={placeholder}
				value={input}
			/>
		</div>
	);
};
