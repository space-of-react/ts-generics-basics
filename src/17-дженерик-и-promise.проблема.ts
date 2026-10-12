export async function withRetry(loader: () => Promise<unknown>): Promise<unknown> {
    try {
        return await loader();
    } catch {
        return await loader();
    }
}

export const userId = withRetry(async () => ({ id: 1 })).then((user) => user.id);
