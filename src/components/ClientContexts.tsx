import type React from 'react';

import type { SettingsDto } from '@/types';

import { AsyncWrapper } from './AsyncWrapper';
import { SettingsProvider } from './SettingsProvider';
import { TransactionEditProvider } from './TransactionEditProvider';
import { TransactionsUpload } from './TransactionsUpload';

interface Props extends React.PropsWithChildren {
	settings: SettingsDto;
}

export const ClientContexts: React.FC<Props> = ({ children, settings }) => (
	<AsyncWrapper>
		<SettingsProvider settings={settings}>
			<TransactionEditProvider>
				<TransactionsUpload>{children}</TransactionsUpload>
			</TransactionEditProvider>
		</SettingsProvider>
	</AsyncWrapper>
);
