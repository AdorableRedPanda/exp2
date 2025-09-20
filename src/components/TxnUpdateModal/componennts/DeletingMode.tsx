import type React from 'react';

import { AlertCircleIcon, Trash2, Undo2 } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { Button } from '@/shadcn/components';

interface Props {
	onCancel: ActionHandler;
	onDelete: ActionHandler;
}

const DeleteMessage = 'This action cannot be undone. Are you sure?';

export const DeletingMode: React.FC<Props> = ({ onCancel, onDelete }) => (
	<div className="w-full flex gap-3 justify-end items-center">
		<div className="text-destructive flex gap-1 flex-1 items-center justify-end">
			<AlertCircleIcon size={16} />
			{DeleteMessage}
		</div>
		<Button onClick={onDelete} type="button" variant="destructive">
			<Trash2 />
		</Button>
		<Button onClick={onCancel} size="icon" type="button" variant="outline">
			<Undo2 />
		</Button>
	</div>
);
