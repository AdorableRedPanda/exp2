'use client';

import { useActionState } from 'react';

import type { LoginData } from '@/types';

import { LoginForm } from '@/components';
import { loginAction } from '@/server/actions';

const init: LoginData = {
	email: '',
	error: '',
	password: '',
};

export default function Login() {
	const [state, formAction, loading] = useActionState(loginAction, init);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<LoginForm action={formAction} loading={loading} state={state} />

			<a
				className="absolute bottom-3 underline underline-offset-2"
				href={process.env.NEXT_PUBLIC_REPO_URL}
			>
				Information
			</a>
		</div>
	);
}
