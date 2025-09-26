import { use, useState } from 'react';

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
