export function parseJson<T>(text: string, isValid: (value: unknown) => value is T): T | null {
    const parsed: unknown = JSON.parse(text);
    return isValid(parsed) ? parsed : null;
}

type User = { id: number };

const isUser = (value: unknown): value is User =>
    typeof value === 'object' && value !== null && typeof (value as User).id === 'number';

export const maybeUser = parseJson('{"id":1}', isUser);

export const fake = parseJson('{"name":"Макс"}', isUser);
export const fakeId = fake === null ? 0 : fake.id;
