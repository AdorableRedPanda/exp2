'use client';

import type React from 'react';

import { Ban, UploadCloud } from 'lucide-react';

import { cn } from '@/shadcn/utils';
import { noop, preventBubble } from '@/utils';

import { useFilesDnD } from './hooks';

interface Props extends React.PropsWithChildren {
	extensions: string[];
	onDrop: (files: File[]) => void;
}

const overlayCls = 'fixed inset-0 flex items-center justify-center z-50';
const messageCls =
	'text-2xl font-bold p-6 flex flex-col items-center justify-center gap-6 text-white';

export const FilesDropzone: React.FC<Props> = ({
	children,
	extensions,
	onDrop: handleDrop,
}) => {
	const { onDrop, onEnter, onLeave, state } = useFilesDnD(
		handleDrop,
		extensions,
	);

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

	return (
		<div
			aria-label="File drop zone"
			className="relative w-full h-full contents"
			onDragEnter={preventBubble(onEnter)}
			onDragLeave={preventBubble(onLeave)}
			onDragOver={preventBubble(noop)}
			onDrop={preventBubble(onDrop)}
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
