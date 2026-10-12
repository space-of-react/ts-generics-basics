export class Box<T> {
    constructor(private value: T) {}

    get(): T {
        return this.value;
    }

    map<R>(fn: (value: T) => R): Box<R> {
        return new Box(fn(this.value));
    }
}

export const nameLength = new Box('Макс').map((name) => name.length).get();
