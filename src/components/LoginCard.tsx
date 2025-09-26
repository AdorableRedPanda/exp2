import type React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shadcn/components';

export const LoginCard: React.FC<React.PropsWithChildren> = ({ children }) => (
	<Card className="w-full max-w-sm">
		<CardHeader>
			<CardTitle>Login to your account</CardTitle>
			<CardDescription>
				Enter your email below to login to your account
			</CardDescription>
		</CardHeader>
		<CardContent>{children}</CardContent>
	</Card>
);
