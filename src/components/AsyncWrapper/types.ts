import type { useActionsValue } from './hooks';

export type ActionKeys =
	| 'deleting'
	| 'logout'
	| 'parsing'
	| 'settings'
	| 'updating'
	| 'uploading';

export type AsyncContext = ReturnType<typeof useActionsValue>;
