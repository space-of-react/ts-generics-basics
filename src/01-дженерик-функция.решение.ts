export function identity<T>(value: T): T {
    return value;
}

export const age = identity(42);
