export type ActionHandler<T = void, S = void> = T extends void
	? () => void
	: S extends void
		? (data: T) => void
		: (a: T, b: S) => void;

export type AsyncHandler<T = void, S = void> = T extends void
	? () => Promise<void>
	: S extends void
		? (data: T) => Promise<void>
		: (a: T, b: S) => Promise<void>;

export type ID = string;

export interface Option {
	label: string;
	value: string;
}

export interface WithId {
	id: ID;
}
