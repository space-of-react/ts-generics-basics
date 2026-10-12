export type MyPartial<T> = { [K in keyof T]?: T[K] };

export const patch: MyPartial<{ name: string; age: number }> = { age: 31 };
