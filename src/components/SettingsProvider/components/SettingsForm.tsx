import type React from 'react';

import type { SettingsDto } from '@/types';

import { useActionLoaders, useAsyncActions } from '@/components/AsyncWrapper';
import { LoadingButton } from '@/components/LoadingButton';
import { UserPart } from '@/components/SettingsProvider/components/UserPart';
import { useUpdateSettings } from '@/components/SettingsProvider/hooks';
import { TagsInput } from '@/components/TransactionForm/components';
import { Label } from '@/shadcn/components';

interface Props {
	settings: SettingsDto;
}

export const SettingsForm: React.FC<Props> = ({ settings }) => {
	const { loading, onSubmit } = useUpdateSettings();
	const { deleteUser } = useAsyncActions();
	const [deleting] = useActionLoaders('user_deleting');

	return (
		<form className="grid gap-4" onSubmit={onSubmit}>
			<UserPart
				email={settings.email}
				loading={deleting}
				onDelete={deleteUser}
			/>
			<div className="flex flex-col gap-2">
				<Label htmlFor="tags">Preferred tags</Label>
				<TagsInput value={settings.tags} />
			</div>

			<div className="w-full flex justify-end">
				<LoadingButton loading={loading} type="submit">
					Save
				</LoadingButton>
			</div>
		</form>
	);
};
