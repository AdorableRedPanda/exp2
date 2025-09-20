import type React from 'react';
import { useState } from 'react';

import { Input } from '@/shadcn/components';

interface Props extends React.PropsWithChildren {
	onSubmit: (text: string) => void;
}

export const TextForm: React.FC<Props> = ({ children, onSubmit }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(text);
		setText('');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	return (
		<form
			className="grid grid-cols-[1fr_auto] gap-2 p-2"
			onSubmit={handleSubmit}
		>
			<Input
				className="border p-2 rounded"
				onChange={handleChange}
				placeholder="Enter text"
				value={text}
			/>
			{children}
		</form>
	);
};
