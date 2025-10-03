import type React from 'react';

import { Input, Label } from '@/shadcn/components';

interface Props {
	value: string;
}

export const EmailInput: React.FC<Props> = ({ value }) => (
	<div className="grid gap-2">
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
