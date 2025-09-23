export const getAverage = (data: number[]) => {
	const sum = data.reduce((acc, val) => acc + val, 0);
	return data.length ? sum / data.length : 0;
};
