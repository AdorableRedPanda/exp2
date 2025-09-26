import type React from 'react';

import type { ActionHandler } from '@/types';

import { Input, Label } from '@/shadcn/components';

import { LoadingButton } from './LoadingButton';
import { LoginCard } from './LoginCard';

interface Props {
	action: ActionHandler<FormData>;
	loading: boolean;
}

export const LoginForm: React.FC<Props> = ({ action, loading }) => (
	<LoginCard>
		<form action={action}>
			<div className="flex flex-col gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						name="email"
						placeholder="m@example.com"
						required
						type="email"
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
					</div>
					<Input name="password" required type="password" />
				</div>
				<LoadingButton className="w-full" loading={loading} type="submit">
					Login
				</LoadingButton>
			</div>
		</form>
	</LoginCard>
);
