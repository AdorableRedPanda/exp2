import type React from 'react';

import { Ban } from 'lucide-react';

import { cn } from '@/shadcn/utils';

import { messageCls, overlayCls } from '../constants';

interface Props {
	extensions: string[];
	show: boolean;
}

export const ErrorMsg: React.FC<Props> = ({ extensions, show }) => {
	const className = cn(
		overlayCls,
		!show && 'hidden',
		'bg-red-900/60 animate-in fade-in',
	);

	return (
		<div className={className}>
			<div className={messageCls}>
				<Ban className="h-20 w-20" />
				Invalid file type. <br />
				Supported: {extensions.join(', ')}
			</div>
		</div>
	);
};
