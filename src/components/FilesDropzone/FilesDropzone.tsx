'use client';

import type React from 'react';

import { Ban, UploadCloud } from 'lucide-react';

import { cn } from '@/lib/utils';
import { preventBubble } from '@/utils';

import { useFilesDnD } from './hooks';

interface Props extends React.PropsWithChildren {
	extensions: string[];
	onDrop: (files: File[]) => void;
}

export const FilesDropzone: React.FC<Props> = ({
	children,
	extensions,
	onDrop,
}) => {
	const {
		onDrop: _onDrop,
		onEnter: _onEnter,
		onLeave: _onLeave,
		state,
	} = useFilesDnD(onDrop, extensions);

	const noop = (_: React.DragEvent) => {};
	const handleDrop = preventBubble(_onDrop);
	const onEnter = preventBubble(_onEnter);
	const onLeave = preventBubble(_onLeave);
	const onDragOver = preventBubble(noop);

	const overlayCls = 'fixed inset-0 flex items-center justify-center z-50';
	const draggingCls = cn(
		overlayCls,
		state !== 'dragging' && 'hidden',
		'bg-slate-600/70 animate-in fade-in',
	);

	const errorCls = cn(
		overlayCls,
		state !== 'error' && 'hidden',
		'bg-red-900/60 animate-in fade-in',
	);

	const messageCls =
		'text-2xl font-bold p-6 flex flex-col items-center justify-center gap-6 text-white';

	return (
		<div
			aria-label="File drop zone"
			className="relative w-full h-full"
			onDragEnter={onEnter}
			onDragLeave={onLeave}
			onDragOver={onDragOver}
			onDrop={handleDrop}
			role="application"
		>
			{children}

			<div className={draggingCls}>
				<div className={messageCls}>
					<UploadCloud className="h-20 w-20" />
					Drop your file here
				</div>
			</div>

			<div className={errorCls}>
				<div className={messageCls}>
					<Ban className="h-20 w-20" />
					Invalid file type. <br />
					Supported: {extensions.join(', ')}
				</div>
			</div>
		</div>
	);
};
