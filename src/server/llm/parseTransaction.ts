'use server';

import { openAi } from './client';

const schema = {
	additionalProperties: false,
	properties: {
		amount: { type: 'number' },
		tags: { items: { type: 'string' }, type: 'array' },
		type: {
			enum: ['income', 'expense'],
			type: 'string',
		},
	},
	required: ['amount', 'type', 'tags'],
	type: 'object',
};

const instructions = 'Extract data from the user input into exact JSON format.';

const model = 'openai/gpt-oss-20b';

export const parseTransaction = async (input: string) => {
	const response = await openAi.responses.create({
		input,
		instructions,
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

	return JSON.parse(response.output_text);
};
