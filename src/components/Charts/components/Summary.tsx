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

import { SummaryConfig } from '../constants';
import { ChartCard } from './ChartCard';

export const Summary: React.FC<ChartProps> = ({ data }) => (
	<ChartCard>
		<CardHeader>
			<CardTitle> Income and Expenses</CardTitle>
			<CardDescription>Monthly aggregation</CardDescription>
		</CardHeader>
		<CardContent>
			<ChartContainer config={SummaryConfig}>
				<BarChart accessibilityLayer data={data}>
					<CartesianGrid vertical={false} />
					<YAxis
						axisLine={false}
						tickFormatter={(value) => value.toLocaleString()}
						tickMargin={10}
					/>
					<XAxis axisLine={false} dataKey="label" tickMargin={10} />
					<ChartTooltip
						content={<ChartTooltipContent indicator="dashed" />}
						cursor={false}
					/>
					<Bar dataKey="income" fill="var(--color-income)" radius={4} />
					<Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
				</BarChart>
			</ChartContainer>
		</CardContent>
	</ChartCard>
);
