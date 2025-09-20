export const parseForm = (form: HTMLFormElement) => {
	const data = new FormData(form);
	const value = data.get('user_input');

	return value?.toString()?.trim() || '';
};
