'use server';

import argon2 from 'argon2';

import type { LoginData } from '@/types';

import { prisma } from '@/server/prisma';
import { buildToken } from '@/utils';

const hashOf = (password: string) =>
	argon2.hash(password, {
		hashLength: 12,
		parallelism: 1,
		type: argon2.argon2id,
	});

export async function createUser(_: LoginData, formData: FormData) {
	const email = formData.get('email')?.toString() || '';
	const password = formData.get('password')?.toString() || '';

	const passwordHash = await hashOf(password);

	prisma.$transaction(async (tx) => {
		const user = await tx.user.create({
			data: {
				email,
				passwordHash,
				token: buildToken(),
			},
		});

		await tx.settings.create({
			data: {
				tags: [],
				userId: user.id,
			},
		});
	});
}
