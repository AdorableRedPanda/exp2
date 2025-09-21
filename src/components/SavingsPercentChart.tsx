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

import type { MonthlySummary } from '@/server/get/getAggregated';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	type ChartConfig,
	ChartContainer,
	ChartTooltipContent,
} from '@/shadcn/components';

interface Props {
	average: number;
	summaries: MonthlySummary[];
}

const chartConfig = {
	savingPercent: {
		color: 'var(--chart-3)',
		label: 'Saving rate',
	},
} satisfies ChartConfig;

export const SavingsPercentChart: React.FC<Props> = ({
	average,
	summaries,
}) => (
	<Card className="mx-auto min-w-3xl h-fit">
		<CardHeader>
			<CardTitle>Процент сохранённых средств</CardTitle>
			<CardDescription>
				Баланс в процентах от дохода по месяцам , average -{' '}
				{Math.round(average)}%
			</CardDescription>
		</CardHeader>
		<CardContent>
			<ChartContainer config={chartConfig}>
				<BarChart data={summaries} height={400} width={800}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis axisLine={false} dataKey="label" tickMargin={10} />
					<YAxis
						axisLine={false}
						domain={[0, 100]} // от 0 до 100%
						tickFormatter={(value) => `${value.toFixed(0)}%`}
						tickMargin={10}
					/>
					<Tooltip content={<ChartTooltipContent indicator="line" />} />
					<Bar
						dataKey="savingPercent"
						fill="var(--chart-3)"
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
	</Card>
);
