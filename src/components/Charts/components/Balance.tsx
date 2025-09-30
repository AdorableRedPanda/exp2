'use client';

import type React from 'react';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/shadcn/components';

import type { ChartProps } from '../types';

import { BalanceConfig } from '../constants';
import { ChartCard } from './ChartCard';

export const Balance: React.FC<ChartProps> = ({ data }) => (
	<ChartCard>
		<CardHeader>
			<CardTitle>Balance by Month</CardTitle>
			<CardDescription>Monthly Aggregation</CardDescription>
		</CardHeader>
		<CardContent>
			<ChartContainer config={BalanceConfig}>
				<BarChart accessibilityLayer data={data}>
					<defs>
						<linearGradient id="balanceGradient" x1="0" x2="0" y1="0" y2="1">
							<stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.8} />
							<stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0.4} />
						</linearGradient>
					</defs>

					<CartesianGrid vertical={false} />
					<YAxis
						axisLine={false}
						tickFormatter={(value) => value.toLocaleString()}
						tickMargin={10}
					/>
					<XAxis axisLine={false} dataKey="label" tickMargin={10} />
					<ChartTooltip
						content={<ChartTooltipContent indicator="line" />}
						cursor={false}
					/>
					<Bar dataKey="balance" fill="url(#balanceGradient)" radius={4} />
				</BarChart>
			</ChartContainer>
		</CardContent>
	</ChartCard>
);
