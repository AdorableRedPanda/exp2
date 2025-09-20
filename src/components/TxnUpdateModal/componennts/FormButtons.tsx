import type React from 'react';
import { useState } from 'react';

import { Save, Trash2 } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { useActionLoaders } from '@/components/AsyncWrapper';
import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/shadcn/components';

import { DeletingMode } from './DeletingMode';

interface Props {
	onDelete: ActionHandler;
}

export const FormButtons: React.FC<Props> = ({ onDelete }) => {
	const [deleteMode, setMode] = useState(false);
	const toggleDelete = () => setMode((mode) => !mode);

	const [deleting, updating] = useActionLoaders('deleting', 'updating');
	const disabled = deleting || updating;

	if (deleteMode) {
		return (
			<DeletingMode
				disabled={disabled}
				loading={deleting}
				onCancel={toggleDelete}
				onDelete={onDelete}
			/>
		);
	}

	return (
		<div className="w-full flex gap-2 justify-end">
			<Button onClick={toggleDelete} size="sm" variant="destructive">
				<Trash2 />
			</Button>
			<LoadingButton className="p-4" loading={updating} size="sm">
				<Save />
			</LoadingButton>
		</div>
	);
};
