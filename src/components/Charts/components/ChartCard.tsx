import type React from 'react';

import { Card } from '@/shadcn/components';

export const ChartCard: React.FC<React.PropsWithChildren> = ({ children }) => (
	<Card className="mx-auto max-w-full w-full h-fit">{children}</Card>
);
