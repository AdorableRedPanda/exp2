import type React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shadcn/components';
import { cn } from '@/shadcn/utils';

interface Props extends React.PropsWithChildren {
	description: string;
	error: boolean;
	title: string;
}

export const FormCard: React.FC<Props> = ({
	children,
	description,
	error,
	title,
}) => (
	<Card className="w-full max-w-sm">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<CardDescription className={cn(error && 'text-destructive')}>
				{description}
			</CardDescription>
		</CardHeader>
		<CardContent>{children}</CardContent>
	</Card>
);
