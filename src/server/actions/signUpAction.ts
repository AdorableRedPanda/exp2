'use server';

import argon2 from 'argon2';
import { redirect } from 'next/navigation';

import type { LoginData } from '@/types';

import { prisma } from '@/server/prisma';
import { buildToken } from '@/utils';

export async function signUpAction(
	_state: LoginData,
	formData: FormData,
): Promise<LoginData> {
	const email = formData.get('email')?.toString() || '';
	const password = formData.get('password')?.toString() || '';

	if (!email || !password) {
		return { email, error: 'Email and password are required', password };
	}

	const existingUser = await prisma.user.findFirst({ where: { email } });

	if (existingUser) {
		return { email, error: 'Email already in use', password };
	}

	const passwordHash = await argon2.hash(password);

	const token = buildToken();

	await prisma.$transaction(async (tx) => {
		const user = await tx.user.create({
			data: {
				email,
				passwordHash,
				token,
			},
		});

		await tx.settings.create({
			data: { tags: [], userId: user.id },
		});
	});

	return redirect('/login');
}
