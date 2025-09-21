'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

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
import type { MonthlySummary } from '@/server/get/getAggregated';
import type React from 'react';

const chartConfig = {
	income: {
		label: 'Income',
		color: 'var(--chart-1)',
	},
	expense: {
		label: 'Expense',
		color: 'var(--chart-2)',
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
						tickMargin={10}
						axisLine={false}
						tickFormatter={(value) => value.toLocaleString()}
					/>
					<XAxis dataKey="label" tickMargin={10} axisLine={false} />
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent indicator="dashed" />}
					/>
					<Bar dataKey="income" fill="var(--color-income)" radius={4} />
					<Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
				</BarChart>
			</ChartContainer>
		</CardContent>
	</Card>
);
