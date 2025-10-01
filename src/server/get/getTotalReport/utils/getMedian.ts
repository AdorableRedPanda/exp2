export const getMedian = (numbers: number[]) => {
	if (numbers.length === 0) {
		return 0;
	}

	const sorted = [...numbers].sort((a, b) => a - b);

	const index = Math.floor(sorted.length / 2);
	const index2 = Math.ceil(sorted.length / 2) - 1;

	return (sorted[index] + sorted[index2]) / 2;
};
