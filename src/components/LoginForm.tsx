import type React from 'react';

import type { ActionHandler, LoginData } from '@/types';

import { Input, Label } from '@/shadcn/components';

import { LoadingButton } from './LoadingButton';
import { LoginCard } from './LoginCard';

interface Props {
	action: ActionHandler<FormData>;
	loading: boolean;
	state: LoginData;
}

export const LoginForm: React.FC<Props> = ({ action, loading, state }) => (
	<LoginCard error={state.error}>
		<form action={action}>
			<div className="flex flex-col gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						defaultValue={state.email}
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
					<Input
						defaultValue={state.password}
						name="password"
						required
						type="password"
					/>
				</div>
				<LoadingButton className="w-full" loading={loading} type="submit">
					Login
				</LoadingButton>
			</div>
		</form>
	</LoginCard>
);
