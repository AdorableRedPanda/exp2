import type React from 'react';

import { X } from 'lucide-react';

import type { ActionHandler } from '@/types';

import { Badge, Button } from '@/shadcn/components';

interface Props {
	onRemove: ActionHandler<string>;
	tag: string;
}

export const StringElement: React.FC<Props> = ({ onRemove, tag }) => (
	<Badge
		className="flex items-center space-x-1 font-medium text-sm"
		variant="secondary"
	>
		<span>{tag}</span>
		<Button
			className="h-4 w-4 p-0"
			onClick={() => onRemove(tag)}
			size="icon"
			type="button"
			variant="ghost"
		>
			<X className="h-3 w-3" />
		</Button>
	</Badge>
);
