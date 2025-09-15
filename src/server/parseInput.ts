'use server';

import OpenAI from 'openai';

import { create } from '@/server/txns';

import { buildTransaction } from './utils';

const API_KEY = process.env.GROQ_API_KEY as string;
const API_URL = process.env.GROQ_URL as string;

const TransactionSchema = {
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

const client = new OpenAI({
	apiKey: API_KEY,
	baseURL: API_URL,
});

export async function parseInput(input: string) {
	const response = await client.responses.create({
		input,
		instructions,
		model,
		stream: false,
		text: {
			format: {
				name: 'transaction',
				schema: TransactionSchema,
				type: 'json_schema',
			},
		},
	});

	const data = JSON.parse(response.output_text);

	return await create(buildTransaction(data));
}
