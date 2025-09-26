'use client';

import type React from 'react';

import { Download, Settings } from 'lucide-react';
import Link from 'next/link';

import { useOpenSettings } from '@/components/SettingsProvider';
import { Button } from '@/shadcn/components';

export const AppHeader: React.FC = () => {
	const onClick = useOpenSettings();

	return (
		<header className="sticky bg-primary text-background px-2 py-2 row-start-1 flex gap-1 flex-wrap items-center justify-between">
			<div className="flex-0 flex gap-1">
				<h1 className="text-2xl font-bold flex-1">Transactions</h1>
				<Button className="" onClick={onClick}>
					<Settings className="size-5" />
				</Button>
			</div>
			<Link download href="/api/download/">
				<Button
					className="text-md w-full flex items-center gap-1"
					variant="secondary"
				>
					Export
					<Download className="size-5" />
				</Button>
			</Link>
		</header>
	);
};
