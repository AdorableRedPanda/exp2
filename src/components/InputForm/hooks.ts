import type { FormEvent } from 'react';

import { useActionLoaders, useAsyncActions } from '@/components/AsyncWrapper';
import { parseForm } from '@/components/InputForm/utils';

export const useInputForm = () => {
	const [parsing, uploading] = useActionLoaders('parsing', 'uploading');
	const { parseInput } = useAsyncActions();

	const loading = parsing || uploading;

	const onSubmit = (ev: FormEvent) => {
		const form = ev.target as HTMLFormElement;
		const input = parseForm(form);

		const onSuccess = () => {
			form.reset();
		};

		if (!input) {
			return;
		}

		parseInput(input).then(onSuccess);
	};

	return { loading, onSubmit };
};
