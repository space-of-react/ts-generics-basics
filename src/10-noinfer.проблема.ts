export function pickDefault<T>(items: T[], fallback: T): T {
    return items[0] ?? fallback;
}

const langs: ('ru' | 'en')[] = ['ru', 'en'];

export const lang: 'ru' | 'en' = pickDefault(langs, 'en');

// @ts-expect-error
export const broken = pickDefault(langs, 'de');
