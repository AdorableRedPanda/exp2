'use client';

import type React from 'react';
import { useState } from 'react';

import { SendHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';

import type { Transaction } from '@/types';

import { LoadingButton } from '@/components/LoadingButton';
import { parseInput, uploadFiles } from '@/server/actions';

import { AsyncWrapper } from './AsyncWrapper';
import { FilesDropzone } from './FilesDropzone';
import { TextForm } from './TextForm';
import { TransactionEditProvider } from './TransactionEditProvider';
import { TransactionView } from './TransactionView';

export const useList = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const toggleLoadingOff = () => setLoading(false);

	const parse = (input: string) => {
		setLoading(true);
		parseInput(input)
			.then(() => {
				router.refresh();
			})
			.then(toggleLoadingOff);
	};

	const upload = (files: File[]) => {
		setLoading(true);
		uploadFiles(files)
			.then(() => {
				router.refresh();
			})
			.then(toggleLoadingOff);
	};

	return { loading, parse, upload };
};

const ValidExtensions = ['application/json'];

interface Props {
	transactions: Transaction[];
}

export const TransactionsList: React.FC<Props> = ({ transactions }) => {
	const { loading, parse, upload } = useList();

	return (
		<AsyncWrapper>
			<TransactionEditProvider>
				<FilesDropzone extensions={ValidExtensions} onDrop={upload}>
					<div className="h-full w-full grid grid-rows-[1fr_auto]">
						<ul className="list-none overflow-auto">
							{transactions.map((t) => (
								<li key={t.id}>
									<TransactionView transaction={t} />
								</li>
							))}
						</ul>
						<TextForm onSubmit={parse}>
							<LoadingButton disabled={loading} loading={loading} type="submit">
								<SendHorizontal />
							</LoadingButton>
						</TextForm>
					</div>
				</FilesDropzone>
			</TransactionEditProvider>
		</AsyncWrapper>
	);
};
