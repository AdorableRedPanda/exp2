import type React from 'react';

import { AlertCircleIcon, Check, Undo2 } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/shadcn/components';

interface Props {
	className?: string;
	disabled: boolean;
	loading: boolean;
	onCancel: ActionHandler;
	onDelete: ActionHandler;
}

const DeleteMessage = 'This action cannot be undone. Are you sure?';

export const DeletingMode: React.FC<Props> = ({
	disabled,
	loading,
	onCancel,
	onDelete,
}) => (
	<div className="w-full flex gap-2 items-center">
		<div className="text-destructive p-1 flex gap-1 flex-1 items-center justify-end">
			<AlertCircleIcon size={16} />
			<span className="flex-1 block">{DeleteMessage}</span>
		</div>
		<LoadingButton
			disabled={disabled}
			loading={loading}
			onClick={onDelete}
			type="button"
			variant="destructive"
		>
			<Check />
		</LoadingButton>
		<Button onClick={onCancel} type="button" variant="secondary">
			<Undo2 />
		</Button>
	</div>
);
