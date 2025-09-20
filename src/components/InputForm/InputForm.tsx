import type React from 'react';

import { SendHorizontal } from 'lucide-react';

import { useInputForm } from '@/components/InputForm/hooks';
import { LoadingButton } from '@/components/LoadingButton';
import { Input } from '@/shadcn/components';

export const InputForm: React.FC = () => {
	const { loading, onSubmit } = useInputForm();

	return (
		<form className="grid grid-cols-[1fr_auto] gap-2 p-2" onSubmit={onSubmit}>
			<Input
				className="border p-2 rounded"
				name="user_input"
				placeholder="Enter text"
			/>
			<LoadingButton disabled={loading} loading={loading} type="submit">
				<SendHorizontal />
			</LoadingButton>
		</form>
	);
};
