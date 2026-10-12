export function mapItems<T, R>(items: T[], fn: (item: T) => R): R[] {
    return items.map(fn);
}

export const lengths = mapItems(['раз', 'два'], (word) => word.length);
