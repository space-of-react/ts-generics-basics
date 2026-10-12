export type MyReturnType<T> = T extends (...args: never[]) => infer R ? R : never;

const count: MyReturnType<() => number> = 42;
export const doubled = count * 2;
