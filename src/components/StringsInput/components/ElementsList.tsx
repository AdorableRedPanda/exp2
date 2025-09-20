import type React from 'react';

import type { ActionHandler } from '@/types';

import { StringElement } from './StringElement';

interface Props {
	onRemove: ActionHandler<string>;
	tags: string[];
}

export const ElementsList: React.FC<Props> = ({ onRemove, tags }) => (
	<>
		{tags.map((tag) => (
			<StringElement key={tag} onRemove={onRemove} tag={tag} />
		))}
	</>
);
