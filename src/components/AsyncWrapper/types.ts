import type { useAsyncWrapper } from './hooks';

export type ActionKeys = 'deleting' | 'parsing' | 'updating' | 'uploading';

export type AsyncContext = ReturnType<typeof useAsyncWrapper>;
