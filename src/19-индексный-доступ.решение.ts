export type User = {
    id: number;
    name: string;
};

export type UserValue = User[keyof User];

export const values: UserValue[] = [1, 'Макс'];
