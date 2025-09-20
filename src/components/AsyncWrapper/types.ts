import type { ActionHandler } from '@/types';

export interface WrapperContext {
	onError: ActionHandler;
	onSuccess: ActionHandler;
}
