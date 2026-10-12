export class Registry<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    byId(id: number): T | undefined {
        return this.items.find((item) => item.id === id);
    }
}

const registry = new Registry<{ id: number; name: string }>();
registry.add({ id: 1, name: 'Макс' });
export const found = registry.byId(1);

// @ts-expect-error
export const broken = new Registry<string>();
