export const parseTags = (t: unknown): string[] => {
	if (Array.isArray(t)) {
		return t.map((s) => s.toString().trim()).filter(Boolean);
	}

	if (typeof t !== 'string') {
		return [];
	}

	return t
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
};
