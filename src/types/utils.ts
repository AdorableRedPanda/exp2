export type ActionHandler<T = void> = T extends void
	? () => void
	: (data: T) => void;

export type ID = string;

export interface Option {
	label: string;
	value: string;
}

export interface WithId {
	id: ID;
}
