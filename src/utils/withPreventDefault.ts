type EventHandler<TEvent extends Preventable> = (e: TEvent) => void;

interface Preventable {
	preventDefault: () => void;
}

export const withPreventDefault = <TEvent extends Preventable>(
	fn: EventHandler<TEvent>,
): EventHandler<TEvent> => {
	return (e) => {
		e.preventDefault();
		fn(e);
	};
};
