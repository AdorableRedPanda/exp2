import type React from 'react';
import { useState } from 'react';

import { Trash2 } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { Button } from '@/shadcn/components';

import { DeletingMode } from './components';

interface Props extends React.PropsWithChildren {
	disabled?: boolean;
	loading: boolean;
	onDelete: ActionHandler;
}

export const ConfirmedDelete: React.FC<Props> = ({
	children,
	disabled = false,
	loading,
	onDelete,
}) => {
	const [deleteMode, setDelete] = useState(false);
	const toggleDelete = () => setDelete((mode) => !mode);

	if (deleteMode) {
		return (
			<DeletingMode
				disabled={disabled}
				loading={loading}
				onCancel={toggleDelete}
				onDelete={onDelete}
			/>
		);
	}

	return (
		<div className="flex gap-2 items-center w-full justify-end">
			{children}
			<Button onClick={toggleDelete} variant="destructive">
				<Trash2 />
			</Button>
		</div>
	);
};
