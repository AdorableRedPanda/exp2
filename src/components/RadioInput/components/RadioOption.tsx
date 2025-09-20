import type * as React from 'react';
import type { ChangeEventHandler } from 'react';

import type { Option } from '@/types';

import { cn } from '@/shadcn/utils';

const radioCn = cn(
	'w-4 h-4 rounded-full border flex items-center justify-center',
	'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-1',
	'peer-checked:border-primary peer-checked:[&>div]:scale-75',
);

const bulletCn = cn(
	'w-full h-full rounded-full bg-primary transform transition-transform scale-0',
);

interface Props {
	checked: boolean;
	name: string;
	onChange: ChangeEventHandler;
	option: Option;
}

export const RadioOption: React.FC<Props> = ({
	checked,
	name,
	onChange,
	option,
}) => {
	return (
		<label className="inline-flex items-center cursor-pointer rounded-md p-1">
			<input
				checked={checked}
				className="sr-only peer"
				name={name}
				onChange={onChange}
				type="radio"
				value={option.value}
			/>
			<span className={radioCn}>
				<div className={bulletCn} />
			</span>
			<span className="ml-2 text-sm text-foreground">{option.label}</span>
		</label>
	);
};
