import { withPreventDefault } from '@/utils/withPreventDefault';

import { withStopPropagation } from './withStopPropagation';

interface Bubbling {
	preventDefault: () => void;
	stopPropagation: () => void;
}

type EventHandler<TEvent extends Bubbling> = (e: TEvent) => void;

export const preventBubble = <TEvent extends Bubbling>(
	fn: EventHandler<TEvent>,
): EventHandler<TEvent> => withPreventDefault(withStopPropagation(fn));
