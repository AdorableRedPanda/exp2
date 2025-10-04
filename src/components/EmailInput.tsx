import type React from 'react';

import { Input, Label } from '@/shadcn/components';
import { cn } from '@/shadcn/utils';

interface Props {
	className?: string;
	value: string;
}

export const EmailInput: React.FC<Props> = ({ className, value }) => (
	<div className={cn('grid gap-2', className)}>
		<Label htmlFor="email">Email</Label>
		<Input
			defaultValue={value}
			name="email"
			placeholder="m@example.com"
			required
			type="email"
		/>
	</div>
);
