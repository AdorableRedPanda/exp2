'use client';

import { useActionState } from 'react';

import type { LoginData } from '@/types';

import { LoginForm } from '@/components';
import { loginAction } from '@/server/actions';

const init: LoginData = {
	email: '',
	password: '',
};

export default function Login() {
	const [_, formAction, loading] = useActionState(loginAction, init);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<LoginForm action={formAction} loading={loading} />
		</div>
	);
}
