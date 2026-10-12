export function entriesOf(obj: object): [string, unknown][] {
    return Object.entries(obj);
}

export const total = entriesOf({ хлеб: 50, молоко: 80 }).reduce((sum, [, price]) => sum + price, 0);
