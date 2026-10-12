export class Box {
    constructor(private value: string) {}

    get(): string {
        return this.value;
    }

    map(fn: (value: string) => string): Box {
        return new Box(fn(this.value));
    }
}

export const nameLength = new Box('Макс').map((name) => name.length).get();
