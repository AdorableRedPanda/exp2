'use client';

import { useActionState } from 'react';

import type { LoginData } from '@/types';

import { SignUpForm } from '@/components';
import { signUpAction } from '@/server/actions';

const init: LoginData = {
	email: '',
	error: '',
	password: '',
};

export default function SignUp() {
	const [state, formAction, loading] = useActionState(signUpAction, init);

	return (
		<div className="w-full h-full flex items-center justify-center">
			<SignUpForm action={formAction} loading={loading} state={state} />
		</div>
	);
}
