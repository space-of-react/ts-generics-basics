export function toTuple<A, B>(a: A, b: B) {
    return [a, b];
}

export const entry: readonly [string, number] = toTuple('Макс', 30);
