import type React from 'react';

import { Save } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { useActionLoaders } from '@/components/AsyncWrapper';
import { ConfirmedDelete } from '@/components/ConfirmedDelete';
import { LoadingButton } from '@/components/LoadingButton';

interface Props {
	onDelete: ActionHandler;
}

export const FormButtons: React.FC<Props> = ({ onDelete }) => {
	const [deleting, updating] = useActionLoaders('deleting', 'updating');
	const disabled = deleting || updating;

	return (
		<ConfirmedDelete disabled={disabled} loading={deleting} onDelete={onDelete}>
			<LoadingButton loading={updating}>
				<Save />
			</LoadingButton>
		</ConfirmedDelete>
	);
};
