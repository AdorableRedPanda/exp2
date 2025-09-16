import type React from 'react';
import { useRef, useState } from 'react';

import type { DropState } from './types';

import { isFilesDragged, isValidFiles } from './utils';

export const useFilesDnD = (
	onFilesDropped: (files: File[]) => void,
	extensions: string[],
) => {
	const childEnterCount = useRef(0);
	const [state, setState] = useState<DropState>('default');

	const reset = () => {
		childEnterCount.current = 0;
		setState('default');
	};

	const onEnter = (e: React.DragEvent) => {
		childEnterCount.current += 1;

		const data = e.dataTransfer;
		if (!data || !isFilesDragged(data)) {
			return;
		}

		const state = isValidFiles(extensions, data) ? 'dragging' : 'error';

		setState(state);
	};

	const onLeave = (_: React.DragEvent) => {
		childEnterCount.current -= 1;
		if (childEnterCount.current > 0) {
			return;
		}

		reset();
	};

	const onDrop = async (e: React.DragEvent) => {
		const files = Array.from(e.dataTransfer?.files || []);

		if (state !== 'error') {
			onFilesDropped(files);
		}

		reset();
	};

	return { onDrop, onEnter, onLeave, state };
};
