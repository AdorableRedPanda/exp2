'use client';

import { type KeyboardEventHandler, useState } from 'react';

import type { ActionHandler } from '@/types';

export const useStringsState = (
	value: string[],
	onChange: ActionHandler<string[]>,
) => {
	const [input, setInput] = useState('');

	const addValue = (s: string) => onChange([...value, s]);
	const removeValue = (s: string) => onChange(value.filter((t) => t !== s));
	const removeLast = () => onChange(value.slice(0, -1));
	const resetInput = () => setInput('');

	const submitInput = () => {
		const newItem = input.trim();
		if (!newItem || value.includes(newItem)) {
			return;
		}

		addValue(newItem);
		resetInput();
	};

	const handleBlur = () => requestAnimationFrame(submitInput);

	const onKey: KeyboardEventHandler = (ev) => {
		switch (ev.key) {
			case ',':
			case 'Enter':
				ev.preventDefault();
				submitInput();
				return;

			case 'Backspace':
				if (input.length) {
					return;
				}

				removeLast();
		}
	};

	return { handleBlur, input, onKey, removeValue, setInput };
};
