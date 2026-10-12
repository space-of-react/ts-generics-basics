export type IsString<T> = T extends string ? true : false;

export const yes: IsString<'привет'> = true;
export const no: IsString<number> = false;

// @ts-expect-error
export const broken: IsString<number> = true;
