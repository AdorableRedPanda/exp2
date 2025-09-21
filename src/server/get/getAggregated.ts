'use server';
import { prisma } from '@/server/prisma';

export interface MonthlySummary {
	balance: number;
	expense: number;
	income: number;
	label: string;
	month: string;
}

export const getAggregated = async () => {
	return prisma.$queryRaw<MonthlySummary[]>`
		SELECT
			date_trunc('month', "date") AS month,
		  	to_char(date_trunc('month', "date"), 'Mon YYYY') AS label,
		  SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS income,
		  SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS expense,
		  SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END)
			- SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS balance
		FROM "Transaction"
		GROUP BY date_trunc('month', "date")
		ORDER BY month;
`;
};
