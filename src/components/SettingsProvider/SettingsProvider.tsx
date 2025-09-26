import type React from 'react';

import type { SettingsDto } from '@/types';

import { SettingsModal } from './components';
import { SettingsCtx } from './context';
import { useSettingsState } from './hooks';

interface Props extends React.PropsWithChildren {
	settings: SettingsDto;
}

export const SettingsProvider: React.FC<Props> = ({ children, settings }) => {
	const { close, open, state } = useSettingsState();

	return (
		<SettingsCtx value={open}>
			{children}
			<SettingsModal onClose={close} open={state} settings={settings} />
		</SettingsCtx>
	);
};
