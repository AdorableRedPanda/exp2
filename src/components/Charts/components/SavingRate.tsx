'use client';

import type React from 'react';

import {
	Bar,
	BarChart,
	CartesianGrid,
	ReferenceLine,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import { getAverage } from '@/components/Charts/utils';
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	ChartContainer,
	ChartTooltipContent,
} from '@/shadcn/components';

import type { ChartProps } from '../types';

import { SavingRateConfig } from '../constants';
import { ChartCard } from './ChartCard';

export const SavingRate: React.FC<ChartProps> = ({ data }) => {
	const average = getAverage(data.map((t) => t.savingRate));
	const description = `Balance as % of income by month, average - ${Math.round(average)}%`;

	return (
		<ChartCard>
			<CardHeader>
				<CardTitle>Saving Rate</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={SavingRateConfig}>
					<BarChart data={data} height={400} width={800}>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis axisLine={false} dataKey="label" tickMargin={10} />
						<YAxis
							axisLine={false}
							tickFormatter={(value) => value.toLocaleString()}
							tickMargin={10}
						/>
						<Tooltip
							content={<ChartTooltipContent indicator="line" />}
							cursor={false}
							label="savingRate"
						/>
						<Bar
							dataKey="savingRate"
							// todo: fix global balanceGradient usage
							fill="url(#balanceGradient)"
							radius={[4, 4, 0, 0]}
						/>
						<ReferenceLine
							stroke="var(--chart-reference-line)"
							strokeDasharray="3 3"
							y={average}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</ChartCard>
	);
};
