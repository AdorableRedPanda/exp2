import type React from 'react';
import type { ChangeEventHandler } from 'react';

import type { ActionHandler, Option } from '@/types';

import { RadioOption } from './components';

interface Props {
	name: string;
	onChange: ActionHandler<string>;
	options: Option[];
	value: string;
}

export const RadioInput: React.FC<Props> = ({
	name,
	onChange,
	options,
	value,
}) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
		onChange(ev.target.value);
	};
	return (
		<div aria-label={name} className="flex gap-2" role="radiogroup">
			{options.map((op) => (
				<RadioOption
					checked={value === op.value}
					key={op.value}
					name={name}
					onChange={handleChange}
					option={op}
				/>
			))}
		</div>
	);
};
