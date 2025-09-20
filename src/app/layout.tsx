import type React from 'react';

import type { Metadata } from 'next';

import './globals.css';

import { Nunito } from 'next/font/google';

import { Toaster } from '@/shadcn/components';

const nunito = Nunito({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-nunito',
});

const icons = process.env.ICON_PATH as string;

export const metadata: Metadata = {
	description: 'Track your expenses with ease',
	icons,
	title: 'Expense Notes',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="h-full" lang="en">
			<body
				className={`${nunito.className} h-full w-full overflow-hidden antialiased bg-muted`}
			>
				{children}]
				<Toaster
					className="toaster group absolute"
					position="top-center"
					richColors
				/>
			</body>
		</html>
	);
}
