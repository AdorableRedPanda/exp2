'use client';

import type React from 'react';

import type { SettingsDto, Transaction } from '@/types';

import { cn } from '@/shadcn/utils';

import { AppHeader } from './AppHeader';
import { ClientContexts } from './ClientContexts';
import { ListPanel } from './ListPanel';

interface Props extends React.PropsWithChildren {
	settings: SettingsDto;
	transactions: Transaction[];
}

const PanelContainerCls = cn(
	'w-full h-full shrink-0 overflow-auto snap-start',
	'md:w-2/5',
	'lg:w-[380px] lg:shrink-0',
);

const ChildContainerCls = cn(
	'snap-start w-full shrink-0 overflow-auto',
	'md:w-3/5',
	'lg:flex-1',
);

export const Transactions: React.FC<Props> = ({
	children,
	settings,
	transactions,
}) => (
	<ClientContexts settings={settings}>
		<main className="m-auto h-full w-full grid grid-rows-[auto_1fr] bg-muted overflow-hidden">
			<AppHeader />
			<div className="flex w-full h-full overflow-x-auto md:overflow-x-hidden snap-x">
				<div className={PanelContainerCls}>
					<ListPanel transactions={transactions} />
				</div>
				<div className={ChildContainerCls}>{children}</div>
			</div>
		</main>
	</ClientContexts>
);
