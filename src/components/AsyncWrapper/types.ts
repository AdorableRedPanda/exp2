import type { useAsyncWrapper } from './hooks';

export type ActionKeys =
	| 'deleting'
	| 'parsing'
	| 'settings'
	| 'updating'
	| 'uploading';

export type AsyncContext = ReturnType<typeof useAsyncWrapper>;
