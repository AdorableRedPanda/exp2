'use client';

import type React from 'react';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import type { MonthlySummary } from '@/server/get/getAggregated';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/shadcn/components';

const chartConfig = {
	expense: {
		color: 'var(--chart-2)',
		label: 'Expense',
	},
	income: {
		color: 'var(--chart-1)',
		label: 'Income',
	},
} satisfies ChartConfig;

interface Props {
	summaries: MonthlySummary[];
}

export const SummaryCharts: React.FC<Props> = ({ summaries }) => (
	<Card className="mx-auto min-w-3xl h-fit">
		<CardHeader>
			<CardTitle>Доходы и расходы</CardTitle>
			<CardDescription>Агрегация по месяцам</CardDescription>
		</CardHeader>
		<CardContent>
			<ChartContainer config={chartConfig}>
				<BarChart accessibilityLayer data={summaries}>
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
	</Card>
);
