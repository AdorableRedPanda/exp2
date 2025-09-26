import type { ActionHandler } from '@/types';

export const isFilesDragged = (data: DataTransfer) =>
	Array.from(data.items).every((item) => item.kind === 'file');

export const isValidFiles = (extensions: string[], data: DataTransfer) => {
	const files = [...data.items];

	return files.length && files.every((f) => extensions.includes(f.type));
};

interface Bubbling {
	preventDefault: ActionHandler;
	stopPropagation: ActionHandler;
}

export const withBubblingPrevent =
	<TEvent extends Bubbling>(fn: ActionHandler<TEvent>) =>
	(ev: Bubbling) => {
		ev.preventDefault();
		ev.stopPropagation();
		fn(ev);
	};

export const noop = () => {};
