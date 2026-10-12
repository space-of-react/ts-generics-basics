export async function withRetry<T>(loader: () => Promise<T>): Promise<T> {
    try {
        return await loader();
    } catch {
        return await loader();
    }
}

export const userId = withRetry(async () => ({ id: 1 })).then((user) => user.id);
