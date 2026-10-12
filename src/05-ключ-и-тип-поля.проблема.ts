export function prop<T>(obj: T, key: string): unknown {
    return obj[key];
}

const user = { name: 'Макс', age: 30 };

export const age: number = prop(user, 'age');
export const name: string = prop(user, 'name');

// @ts-expect-error
export const email = prop(user, 'email');
