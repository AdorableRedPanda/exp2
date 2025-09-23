import type { ChartConfig } from '@/shadcn/components';

export const BalanceConfig = {
	balance: {
		color: 'var(--chart-3)',
		label: 'Balance',
	},
} satisfies ChartConfig;

export const SavingRateConfig = {
	savingPercent: {
		color: 'var(--chart-3)',
		label: 'Saving rate',
	},
} satisfies ChartConfig;

export const SummaryConfig = {
	expense: {
		color: 'var(--chart-2)',
		label: 'Expense',
	},
	income: {
		color: 'var(--chart-1)',
		label: 'Income',
	},
} satisfies ChartConfig;
