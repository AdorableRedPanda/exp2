type EventHandler<TEvent extends PropagationStoppable> = (e: TEvent) => void;

interface PropagationStoppable {
	stopPropagation: () => void;
}

export const withStopPropagation = <TEvent extends PropagationStoppable>(
	fn: EventHandler<TEvent>,
): EventHandler<TEvent> => {
	return (e) => {
		e.stopPropagation();
		fn(e);
	};
};
