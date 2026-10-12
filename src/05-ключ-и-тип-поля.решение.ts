export function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { name: 'Макс', age: 30 };

export const age: number = prop(user, 'age');
export const name: string = prop(user, 'name');

// @ts-expect-error
export const email = prop(user, 'email');
