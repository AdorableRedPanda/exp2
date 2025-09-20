import type React from 'react';
import { useState } from 'react';

import { Loader, Save, Trash2 } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { Button } from '@/shadcn/components';

import { DeletingMode } from './DeletingMode';

interface Props {
	deleting: boolean;
	onDelete: ActionHandler;
	updating: boolean;
}

export const FormButtons: React.FC<Props> = ({
	deleting,
	onDelete,
	updating,
}) => {
	const [deleteMode, setMode] = useState(false);
	const toggleDelete = () => setMode((mode) => !mode);

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
			<Button onClick={toggleDelete} variant="destructive">
				<Trash2 />
			</Button>
			<Button disabled={disabled} type="submit">
				{updating ? <Loader className="animate-spin" /> : <Save />}
			</Button>
		</div>
	);
};
