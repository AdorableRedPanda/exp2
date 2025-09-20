import type React from 'react';

import { Loader } from 'lucide-react';

import { Button } from '@/shadcn/components';

interface Props extends React.ComponentProps<typeof Button> {
	loading: boolean;
}

export const LoadingButton: React.FC<Props> = ({
	children,
	disabled,
	loading,
	...props
}) => (
	<Button disabled={disabled || loading} {...props}>
		{loading ? <Loader className="animate-spin" /> : children}
	</Button>
);
