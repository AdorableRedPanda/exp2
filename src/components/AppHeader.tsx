'use client';

import type React from 'react';

import { Download, LogOut, Settings } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shadcn/components';

import { useAsyncActions } from './AsyncWrapper';
import { useOpenSettings } from './SettingsProvider';

export const AppHeader: React.FC = () => {
	const onClick = useOpenSettings();
	const { logoutAction } = useAsyncActions();

	return (
		<header className="sticky bg-foreground text-background px-2 py-2 row-start-1 flex gap-1 flex-wrap items-center justify-between">
			<div className="flex-0 flex gap-1">
				<h1 className="text-2xl font-bold flex-1">Transactions</h1>
				<Button className="text-background" onClick={onClick} variant="link">
					<Settings className="size-5" />
				</Button>
				<Link className="hover:underline" download href="/api/download/">
					<Button className="text-background" variant="link">
						<Download className="size-5" />
						Download
					</Button>
				</Link>
			</div>

			<Button
				className="text-md flex items-center gap-1"
				onClick={logoutAction}
				variant="secondary"
			>
				Logout
				<LogOut />
			</Button>
		</header>
	);
};
