import type React from 'react';

import type { SettingsDto } from '@/types';

import { useActionLoaders, useAsyncActions } from '@/components/AsyncWrapper';
import { LoadingButton } from '@/components/LoadingButton';
import { TagsInput } from '@/components/TransactionForm/components';
import { Input, Label } from '@/shadcn/components';

interface Props {
	settings: SettingsDto;
}

export const SettingsForm: React.FC<Props> = ({ settings }) => {
	const [loading] = useActionLoaders('settings');
	const { updateSettings } = useAsyncActions();

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const value = formData.get('tags') as string;
		updateSettings(value.split(','));
	};

	return (
		<form className="grid gap-4" onSubmit={onSubmit}>
			<div className="flex gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					disabled
					name="email"
					placeholder="m@example.com"
					readOnly
					required
					type="email"
					value={settings.email}
				/>
			</div>
			<TagsInput value={settings.tags} />
			<div className="w-full flex justify-end">
				<LoadingButton loading={loading} type="submit">
					Save
				</LoadingButton>
			</div>
		</form>
	);
};
