import type React from 'react';

import Link from 'next/link';

import type { ActionHandler, LoginData } from '@/types';

import { Button } from '@/shadcn/components';

import { EmailInput } from './EmailInput';
import { FormCard } from './FormCard';
import { LoadingButton } from './LoadingButton';
import { PasswordInput } from './PasswordInput';

interface Props {
	action: ActionHandler<FormData>;
	loading: boolean;
	state: LoginData;
}

const title = 'Create new account';
const DefaultDescription = 'Enter email and password to create a new account';

export const SignUpForm: React.FC<Props> = ({ action, loading, state }) => {
	const error = !!state.error;
	const description = error ? state.error : DefaultDescription;

	return (
		<FormCard description={description} error={error} title={title}>
			<form action={action}>
				<div className="flex flex-col gap-6">
					<EmailInput value={state.email} />
					<PasswordInput value={state.email} visible />
					<div className="flex gap-2 w-full justify-end">
						<Link href="/login">
							<Button type="button" variant="link">
								Login
							</Button>
						</Link>
						<LoadingButton loading={loading} type="submit">
							Create account
						</LoadingButton>
					</div>
				</div>
			</form>
		</FormCard>
	);
};
