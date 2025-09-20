import type React from 'react';

import { useWrapperValue } from '@/components/AsyncWrapper/hooks';

import { WrapperCtx } from './context';

export const AsyncWrapper: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const value = useWrapperValue();

	return <WrapperCtx value={value}>{children}</WrapperCtx>;
};
