import type React from 'react';
import { useEffect, useState } from 'react';

import { Loader, SendHorizontal } from 'lucide-react';

import type { Transaction } from '@/types';

import { Button } from '@/lib/components';
import { handleInput, handleUpload } from '@/server/actions';
import { getTransactions } from '@/server/get';

import { FilesDropzone } from './FilesDropzone';
import { TextForm } from './TextForm';
import { TransactionView } from './TransactionView';

export const useList = () => {
	const [state, setState] = useState<Transaction[]>([]);
	const [loading, setLoading] = useState(false);

	const toggleLoadingOff = () => setLoading(false);

	const fetchAll = () => getTransactions().then(setState);

	useEffect(() => {
		fetchAll();
	}, [fetchAll]);

	const parse = (input: string) => {
		setLoading(true);
		handleInput(input).then(fetchAll).then(toggleLoadingOff);
	};

	const upload = (files: File[]) => {
		setLoading(true);
		handleUpload(files).then(fetchAll).then(toggleLoadingOff);
	};

	return { loading, parse, state, upload };
};

const ValidExtensions = ['application/json'];

export const TransactionsList: React.FC = () => {
	const { loading, parse, state, upload } = useList();

	return (
		<FilesDropzone extensions={ValidExtensions} onDrop={upload}>
			<div className="h-full w-full grid grid-rows-[1fr_auto]">
				<ul className="list-none overflow-auto">
					{state.map((t) => (
						<li key={t.id}>
							<TransactionView transaction={t} />
						</li>
					))}
				</ul>
				<TextForm onSubmit={parse}>
					<Button disabled={loading} type="submit">
						{loading && <Loader className="animate-spin" />}
						{!loading && <SendHorizontal />}
					</Button>
				</TextForm>
			</div>
		</FilesDropzone>
	);
};
