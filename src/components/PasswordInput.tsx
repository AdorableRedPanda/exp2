import type React from 'react';

import { Input, Label } from '@/shadcn/components';

interface Props {
	value: string;
	visible?: boolean;
}

export const PasswordInput: React.FC<Props> = ({ value, visible = false }) => (
	<div className="grid gap-2">
		<div className="flex items-center">
			<Label htmlFor="password">Password</Label>
		</div>
		<Input
			defaultValue={value}
			name="password"
			required
			type={visible ? 'text' : 'password'}
		/>
	</div>
);
