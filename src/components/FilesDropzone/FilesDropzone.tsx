'use client';

import type React from 'react';

import { ErrorMsg, ProcessMsg } from './components';
import { useFilesDnD } from './hooks';
import { noop, withBubblingPrevent } from './utils';

interface Props extends React.PropsWithChildren {
	extensions: string[];
	onDrop: (files: File[]) => void;
}

export const FilesDropzone: React.FC<Props> = ({
	children,
	extensions,
	onDrop: handleDrop,
}) => {
	const { onDrop, onEnter, onLeave, state } = useFilesDnD(
		handleDrop,
		extensions,
	);

	return (
		<div
			aria-label="File drop zone"
			className="relative w-full h-full contents"
			onDragEnter={withBubblingPrevent(onEnter)}
			onDragLeave={withBubblingPrevent(onLeave)}
			onDragOver={withBubblingPrevent(noop)}
			onDrop={withBubblingPrevent(onDrop)}
			role="application"
		>
			{children}

			<ProcessMsg show={state === 'dragging'} />
			<ErrorMsg extensions={extensions} show={state === 'error'} />
		</div>
	);
};
