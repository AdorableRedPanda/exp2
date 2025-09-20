import type React from 'react';

import { useAsyncActions } from '@/components/AsyncWrapper';
import { FilesDropzone } from '@/components/FilesDropzone';

const extensions = ['application/json'];

export const TransactionsUpload: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { uploadFiles } = useAsyncActions();

	return (
		<FilesDropzone extensions={extensions} onDrop={uploadFiles}>
			{children}
		</FilesDropzone>
	);
};
