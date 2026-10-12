export type NonNullableOf<T> = T;

export function shout(value: NonNullableOf<string | null>): string {
    return value.toUpperCase();
}
