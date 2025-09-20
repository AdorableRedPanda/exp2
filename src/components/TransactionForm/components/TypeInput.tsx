import type React from 'react';
import { useState } from 'react';

import type { Option } from '@/types';

import { RadioInput } from '@/components/RadioInput';

interface Props {
	value: string;
}

const opts: Option[] = [
	{ label: 'Expense', value: 'expense' },
	{ label: 'Income', value: 'income' },
];

export const TypeInput: React.FC<Props> = ({ value }) => {
	const [state, setState] = useState(value);

	return (
		<>
			<RadioInput
				name="type"
				onChange={setState}
				options={opts}
				value={state}
			/>
			<input type="hidden" value={state} />
		</>
	);
};
