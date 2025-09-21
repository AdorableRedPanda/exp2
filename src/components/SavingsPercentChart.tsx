'use client';

import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ReferenceLine,
} from 'recharts';

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
import type { MonthlySummary } from '@/server/get/getAggregated';
import type React from 'react';

interface Props {
	summaries: MonthlySummary[];
	average: number;
}

const chartConfig = {
	savingPercent: {
		label: 'Saving rate',
		color: 'var(--chart-3)',
	},
} satisfies ChartConfig;

export const SavingsPercentChart: React.FC<Props> = ({
	summaries,
	average,
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
				<BarChart width={800} height={400} data={summaries}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="label" tickMargin={10} axisLine={false} />
					<YAxis
						tickMargin={10}
						axisLine={false}
						tickFormatter={(value) => `${value.toFixed(0)}%`}
						domain={[0, 100]} // от 0 до 100%
					/>
					<Tooltip content={<ChartTooltipContent indicator="line" />} />
					<Bar
						dataKey="savingPercent"
						fill="var(--chart-3)"
						radius={[4, 4, 0, 0]}
					/>
					<ReferenceLine
						y={average}
						stroke="var(--chart-reference-line)"
						strokeDasharray="3 3"
					/>
				</BarChart>
			</ChartContainer>
		</CardContent>
	</Card>
);
