export function reset<T extends { count: number }>(state: T): T {
    const next = { ...state };
    next.count = 0;
    return next;
}

export const cleared = reset({ count: 5, label: 'клики' });
export const label = cleared.label;
