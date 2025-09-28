'use server';

import argon2 from 'argon2';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import type { LoginData } from '@/types';

import { prisma } from '@/server/prisma';

import { TOKEN_COOKIE } from '../constants';

export async function loginAction(loginData: LoginData, formData: FormData) {
	const email = formData.get('email')?.toString() || '';
	const password = formData.get('password')?.toString() || '';

	const user = await prisma.user.findFirst({
		select: { passwordHash: true, token: true },
		where: { email },
	});

	const valid = argon2.verify(user?.passwordHash || '', password);

	if (!valid || !user) {
		throw 'Email or password is incorrect';
	}

	const cookieStore = await cookies();

	cookieStore.set(TOKEN_COOKIE, user.token, { path: '/' });

	redirect('/');

	return loginData;
}
