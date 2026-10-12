export function assign<T extends object, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    const copy = { ...obj };
    copy[key] = value;
    return copy;
}

const user = { 
    name: 'Макс', 
    age: 30 
};

export const older = assign(user, 'age', 31);

// @ts-expect-error
export const broken = assign(user, 'age', 'тридцать');
