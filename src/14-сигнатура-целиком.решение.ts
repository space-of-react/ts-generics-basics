export function once<A extends unknown[], R>(fn: (...args: A) => R): (...args: A) => R {
    let called = false;
    let result!: R;
    return (...args: A): R => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

const onceAdd = once((a: number, b: number) => a + b);
export const sum = onceAdd(1, 2) + 1;
