import type React from 'react';
import { use, useState } from 'react';

import { useActionLoaders, useAsyncActions } from '@/components/AsyncWrapper';

import { SettingsCtx } from './context';

export const useSettingsState = () => {
	const [state, setState] = useState(false);

	const open = () => setState(true);
	const close = () => setState(false);

	return { close, open, state };
};

export const useOpenSettings = () => {
	const ctx = use(SettingsCtx);

	return () => ctx?.();
};

export const useUpdateSettings = () => {
	const [loading] = useActionLoaders('settings');
	const { updateSettings } = useAsyncActions();

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const value = formData.get('tags') as string;
		updateSettings(value.split(','));
	};

	return { loading, onSubmit };
};
