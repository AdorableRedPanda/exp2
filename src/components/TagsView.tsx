import type React from 'react';

import { Badge } from '@/shadcn/components';

interface Props {
	tags: string[];
}

export const TagsView: React.FC<Props> = ({ tags }) => (
	<ul className="flex-1 list-none flex gap-1 h-full items-start">
		{tags.map((tag) => (
			<li key={tag}>
				<Badge>{tag}</Badge>
			</li>
		))}
	</ul>
);
