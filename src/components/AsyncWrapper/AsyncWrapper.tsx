import type React from 'react';

import { AsyncCtx } from './context';
import { useAsyncWrapper } from './hooks';

export const AsyncWrapper: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const value = useAsyncWrapper();

	return <AsyncCtx value={value}>{children}</AsyncCtx>;
};
