export function save<T extends { name: string }>(entity: T): T {
    return entity;
}

export const savedAge = save({ name: 'Макс', age: 30 }).age;
