import type React from 'react';

import Link from 'next/link';

import type { ActionHandler, LoginData } from '@/types';

import { EmailInput } from '@/components/EmailInput';
import { PasswordInput } from '@/components/PasswordInput';
import { Button } from '@/shadcn/components';

import { FormCard } from './FormCard';
import { LoadingButton } from './LoadingButton';

interface Props {
	action: ActionHandler<FormData>;
	loading: boolean;
	state: LoginData;
}

const title = 'Login to your account';
const DefaultDescription = 'Enter your email below to login to your account';

export const LoginForm: React.FC<Props> = ({ action, loading, state }) => {
	const error = !!state.error;
	const description = error ? state.error : DefaultDescription;

	return (
		<FormCard description={description} error={error} title={title}>
			<form action={action}>
				<div className="flex flex-col gap-6">
					<EmailInput value={state.email} />
					<PasswordInput value={state.email} />

					<div className="flex gap-2 w-full justify-end">
						<Link href="/sign-up">
							<Button type="button" variant="link">
								Sign up
							</Button>
						</Link>
						<LoadingButton loading={loading} type="submit">
							Login
						</LoadingButton>
					</div>
				</div>
			</form>
		</FormCard>
	);
};
