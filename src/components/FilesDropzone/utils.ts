export const isFilesDragged = (data: DataTransfer) =>
	Array.from(data.items).every((item) => item.kind === 'file');
export const isValidFiles = (extensions: string[], data: DataTransfer) => {
	const files = [...data.items];

	return files.length && files.every((f) => extensions.includes(f.type));
};
