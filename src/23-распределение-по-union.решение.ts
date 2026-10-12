export type NonNullableOf<T> = T extends null | undefined ? never : T;

export function shout(value: NonNullableOf<string | null>): string {
    return value.toUpperCase();
}
