export function lengthOf<T extends { length: number }>(value: T): number {
    return value.length;
}

export const nameLength = lengthOf('Макс');
export const listLength = lengthOf([1, 2, 3]);

// @ts-expect-error
export const nonsense = lengthOf(42);
