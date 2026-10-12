export type MyReturnType<T> = unknown;

const count: MyReturnType<() => number> = 42;
export const doubled = count * 2;
