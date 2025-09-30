import type { Transaction } from '@/types';

export const getMonthKey = (t: Transaction) => t.date.toISOString().slice(0, 7);
