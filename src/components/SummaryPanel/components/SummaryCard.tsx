import type React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shadcn/components';

export const SummaryCard: React.FC<React.PropsWithChildren> = ({
	children,
}) => (
	<Card className="w-full @container">
		<CardHeader>
			<CardTitle className="flex items-center justify-between gap-2">
				<span>Total summary</span>
			</CardTitle>
			<CardDescription>Overview for the whole period</CardDescription>
		</CardHeader>
		<CardContent>{children}</CardContent>
	</Card>
);
