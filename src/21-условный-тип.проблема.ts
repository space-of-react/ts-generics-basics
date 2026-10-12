export type IsString<T> = boolean;

export const yes: IsString<'привет'> = true;
export const no: IsString<number> = false;

// @ts-expect-error
export const broken: IsString<number> = true;
