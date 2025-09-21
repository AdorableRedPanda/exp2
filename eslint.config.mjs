import tsPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
	{
		ignores: ['.next', 'node_modules'],
	},
	perfectionist.configs['recommended-natural'],
	{
		rules: {
			'perfectionist/sort-imports': [
				'error',
				{
					customGroups: [
						{
							elementNamePattern: ['^react$', '^react-.+'],
							groupName: 'react',
						},
						{
							elementNamePattern: ['^next$'],
							groupName: 'next',
						},
					],
					groups: [
						'type-import',
						'react',
						'next',
						['value-builtin', 'value-external'],
						'type-internal',
						'value-internal',
						['type-parent', 'type-sibling', 'type-index'],
						['value-parent', 'value-sibling', 'value-index'],
						'ts-equals-import',
						'unknown',
					],
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: parser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				project: './tsconfig.json',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'@typescript-eslint/no-redundant-type-constituents': 'error',
		},
	},
	{
		rules: {
			'perfectionist/sort-imports': 'error',
			'perfectionist/sort-interfaces': ['error'],
			'perfectionist/sort-objects': [
				'error',
				{
					type: 'alphabetical',
				},
			],
		},
	},
	{
		rules: {
			curly: ['error', 'all'],
			'max-depth': ['error', 2],
			'max-lines-per-function': ['error', 50],
			'max-nested-callbacks': ['error', 3],
			'no-console': ['error', { allow: ['error', 'info'] }],
			'no-restricted-syntax': [
				'error',
				{
					message:
						'Using a ternary operator for field initialization is prohibited.',
					selector: 'Property > ConditionalExpression',
				},
			],
		},
	},
	{ ignores: ['src/shadcn/**'] },
];
