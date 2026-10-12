export function pick(obj: object, keys: string[]): object {
    const result: Record<string, unknown> = {};
    for (const key of keys) {
        result[key] = (obj as Record<string, unknown>)[key];
    }
    return result;
}

const short = pick({ name: 'Макс', age: 30, admin: true }, ['name', 'age']);
export const shortName = short.name;
