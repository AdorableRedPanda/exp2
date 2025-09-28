import type React from 'react';

import { AsyncCtx } from './context';
import { useActionsValue } from './hooks';

export const AsyncWrapper: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const value = useActionsValue();

	return <AsyncCtx value={value}>{children}</AsyncCtx>;
};
