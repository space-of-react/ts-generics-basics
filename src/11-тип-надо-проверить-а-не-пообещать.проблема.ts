export function parseJson<T>(text: string): T {
    return JSON.parse(text) as T;
}

type User = { id: number };

const isUser = (value: unknown): value is User =>
    typeof value === 'object' && value !== null && typeof (value as User).id === 'number';

export const maybeUser = parseJson('{"id":1}', isUser);

export const fake = parseJson<User>('{"name":"Макс"}');
export const fakeId = fake.id;
