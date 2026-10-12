export function mapItems(items: unknown[], fn: (item: unknown) => unknown): unknown[] {
    return items.map(fn);
}

export const lengths = mapItems(['раз', 'два'], (word) => word.length);
