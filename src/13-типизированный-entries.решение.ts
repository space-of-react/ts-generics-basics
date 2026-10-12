export function entriesOf<T extends object>(obj: T): [keyof T, T[keyof T]][] {
    return Object.entries(obj) as [keyof T, T[keyof T]][];
}

export const total = entriesOf({ хлеб: 50, молоко: 80 }).reduce((sum, [, price]) => sum + price, 0);
