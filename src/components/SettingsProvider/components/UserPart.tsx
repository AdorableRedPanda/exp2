import type React from 'react';

import type { ActionHandler } from '@/types';

import { ConfirmedDelete } from '@/components/ConfirmedDelete';

interface Props {
	email: string;
	loading: boolean;
	onDelete: ActionHandler;
}

export const UserPart: React.FC<Props> = ({ email, loading, onDelete }) => (
	<div className="flex items-center border border-transparent rounded-md transition-colors bg-muted/50 p-2">
		<ConfirmedDelete loading={loading} onDelete={onDelete}>
			<div className="flex w-full h-full items-center gap-2">
				User: <span className="font-semibold">{email}</span>
			</div>
		</ConfirmedDelete>
	</div>
);
