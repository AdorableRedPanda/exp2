import type { ActionHandler } from '@/types';

interface Bubbling {
	preventDefault: ActionHandler;
	stopPropagation: ActionHandler;
}

export const preventBubble =
	<TEvent extends Bubbling>(fn: ActionHandler<TEvent>) =>
	(ev: Bubbling) => {
		ev.preventDefault();
		ev.stopPropagation();
		fn(ev);
	};
