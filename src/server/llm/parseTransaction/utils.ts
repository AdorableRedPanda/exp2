export const buildInstructions = (date: string, tags: string[]) => [
	'Extract data from the user input into exact JSON format.',
	`Define date closest to ${date} - use same time, day, month, year if not specified in input.`,
	`If it can be matched use these tags: ${tags.join(',')}`,
];
