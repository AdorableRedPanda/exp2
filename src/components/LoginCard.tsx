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
	error: string;
}

const DefaultDescription = 'Enter your email below to login to your account';

export const LoginCard: React.FC<Props> = ({ children, error }) => (
	<Card className="w-full max-w-sm">
		<CardHeader>
			<CardTitle>Login to your account</CardTitle>
			<CardDescription className={cn(error && 'text-destructive')}>
				{error ? error : DefaultDescription}
			</CardDescription>
		</CardHeader>
		<CardContent>{children}</CardContent>
	</Card>
);
