export function once(fn: (...args: unknown[]) => unknown): (...args: unknown[]) => unknown {
    let called = false;
    let result: unknown;
    return (...args: unknown[]) => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

const onceAdd = once((a: number, b: number) => a + b);
export const sum = onceAdd(1, 2) + 1;
