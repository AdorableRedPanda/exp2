export const schema = {
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

export const model = 'openai/gpt-oss-20b';
