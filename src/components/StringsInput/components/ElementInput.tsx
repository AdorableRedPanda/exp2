import type React from 'react';
import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

import type { ActionHandler } from '@/types';

interface Props {
	onBlur: ActionHandler;
	onChange: ActionHandler<string>;
	onKey: KeyboardEventHandler;
	placeholder: string;
	value: string;
}

export const ElementInput: React.FC<Props> = ({
	onBlur,
	onChange,
	onKey,
	placeholder,
	value,
}) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
		onChange(ev.target.value);
	};

	return (
		<input
			className="md:text-sm min-w-3 flex-1 outline-none border-none placeholder:text-sm placeholder:text-muted-foreground"
			enterKeyHint="done"
			name="element input"
			onBlur={onBlur}
			onChange={handleChange}
			onKeyDown={onKey}
			placeholder={placeholder}
			value={value}
		/>
	);
};
