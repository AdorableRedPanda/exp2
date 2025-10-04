import type { useActionsValue } from './hooks';

export type ActionKeys =
	| 'deleting'
	| 'logout'
	| 'parsing'
	| 'settings'
	| 'updating'
	| 'uploading'
	| 'user_deleting';

export type AsyncContext = ReturnType<typeof useActionsValue>;
