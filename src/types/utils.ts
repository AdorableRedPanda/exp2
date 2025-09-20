export type ActionHandler<T = void, S = void> = T extends void
	? () => void
	: S extends void
		? (data: T) => void
		: (a: T, b: S) => void;

export type ID = string;

export interface Option {
	label: string;
	value: string;
}

export interface WithId {
	id: ID;
}
