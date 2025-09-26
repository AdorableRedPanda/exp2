import type React from 'react';

import { UploadCloud } from 'lucide-react';

import { cn } from '@/shadcn/utils';

import { messageCls, overlayCls } from '../constants';

interface Props {
	show: boolean;
}

export const ProcessMsg: React.FC<Props> = ({ show }) => {
	const className = cn(
		overlayCls,
		!show && 'hidden',
		'bg-slate-600/70 animate-in fade-in',
	);

	return (
		<div className={className}>
			<div className={messageCls}>
				<UploadCloud className="h-20 w-20" />
				Drop your file here
			</div>
		</div>
	);
};
