import type React from 'react';
import { useState } from 'react';

import { Save, Trash2 } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { Button } from '@/shadcn/components';

import { DeletingMode } from './DeletingMode';

interface Props {
	onDelete: ActionHandler;
}

export const FormButtons: React.FC<Props> = ({ onDelete }) => {
	const [deleteMode, setMode] = useState(false);
	const toggleDelete = () => setMode((mode) => !mode);

	if (deleteMode) {
		return <DeletingMode onCancel={toggleDelete} onDelete={onDelete} />;
	}

	return (
		<div className="w-full flex gap-2 justify-end">
			<Button onClick={toggleDelete} variant="destructive">
				<Trash2 />
			</Button>
			<Button type="submit">
				<Save />
			</Button>
		</div>
	);
};
