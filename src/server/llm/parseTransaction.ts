'use server';

import { openAi } from './client';

const schema = {
	additionalProperties: false,
	properties: {
		amount: { type: 'number' },
		date: { format: 'date-time', type: 'string' },
		tags: { items: { type: 'string' }, type: 'array' },
		type: {
			enum: ['income', 'expense'],
			type: 'string',
		},
	},
	required: ['amount', 'type', 'tags'],
	type: 'object',
};

const instructions = (d: Date, tags: string[]) =>
	[
		'Extract data from the user input into exact JSON format.',
		`Define date closest to ${d.toString()} - use same time, day, month, year if not specified in input.`,
		`If it can be matched use these tags: ${tags.join(',')}`,
	].join('');

const model = 'openai/gpt-oss-20b';

export const parseTransaction = async (input: string, tags: string[]) => {
	const now = new Date();
	const response = await openAi.responses.create({
		input,
		instructions: instructions(now, tags),
		model,
		stream: false,
		text: {
			format: {
				name: 'transaction',
				schema,
				type: 'json_schema',
			},
		},
	});

	return <unknown>JSON.parse(response.output_text);
};
