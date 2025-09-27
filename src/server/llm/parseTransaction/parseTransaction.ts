'use server';

import { openAi } from '../client';
import { model, schema } from './constants';
import { buildInstructions } from './utils';

export const parseTransaction = async (input: string, tags: string[]) => {
	const now = new Date();
	const instructions = buildInstructions(now.toString(), tags).join(',');

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
