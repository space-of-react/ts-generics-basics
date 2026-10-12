export function reset<T extends { count: number }>(state: T): T {
    return { count: 0 };
}

export const cleared = reset({ count: 5, label: 'клики' });
export const label = cleared.label;
