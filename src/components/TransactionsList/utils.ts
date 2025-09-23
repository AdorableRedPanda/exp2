export const getDateLabel = (d: Date) =>
	d.toLocaleDateString('en-GB', {
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		month: 'short',
	});
