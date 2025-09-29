'use server';

import argon2 from 'argon2';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import type { LoginData } from '@/types';

import { prisma } from '@/server/prisma';

import { TOKEN_COOKIE } from '../constants';

const MAX_AGE = 60 * 60 * 24 * 30;
const CookieOpts = { httpOnly: true, maxAge: MAX_AGE, path: '/' };

export async function loginAction(
	_state: LoginData,
	formData: FormData,
): Promise<LoginData> {
	const email = formData.get('email')?.toString() || '';
	const password = formData.get('password')?.toString() || '';

	const user = await prisma.user.findFirst({
		select: { passwordHash: true, token: true },
		where: { email },
	});

	const valid = argon2.verify(user?.passwordHash || '', password);

	if (!valid || !user) {
		return { email, error: 'Email or password is incorrect', password };
	}

	const cookieStore = await cookies();

	cookieStore.set(TOKEN_COOKIE, user.token, CookieOpts);

	return redirect('/');
}
