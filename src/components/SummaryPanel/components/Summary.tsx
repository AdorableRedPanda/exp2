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
					<defs>
						<linearGradient id="incomeGradient" x1="0" x2="0" y1="0" y2="1">
							<stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.9} />
							<stop
								offset="95%"
								stopColor="var(--chart-3)"
								stopOpacity={0.45}
							/>
						</linearGradient>
						<linearGradient id="expenseGradient" x1="0" x2="0" y1="0" y2="1">
							<stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.9} />
							<stop
								offset="95%"
								stopColor="var(--chart-2)"
								stopOpacity={0.45}
							/>
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
						content={<ChartTooltipContent indicator="dashed" />}
						cursor={false}
					/>
					<Bar dataKey="income" fill="url(#incomeGradient)" radius={4} />
					<Bar dataKey="expense" fill="url(#expenseGradient)" radius={4} />
				</BarChart>
			</ChartContainer>
		</CardContent>
	</ChartCard>
);
