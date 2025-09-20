'use client';

import type React from 'react';
import { useState } from 'react';

import { StringsInput } from '@/components/StringsInput';

interface Props {
	value: string[];
}

const serialize = (tags: string[]) => tags.join(',');

export const TagsInput: React.FC<Props> = ({ value }) => {
	const [state, setState] = useState(value);

	return (
		<>
			<StringsInput onChange={setState} placeholder="add tag" value={state} />
			<input name="tags" type="hidden" value={serialize(state)} />
		</>
	);
};
