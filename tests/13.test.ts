import { describe, test, expect, expectTypeOf } from 'vitest';
import { entriesOf, total } from '../src/13-типизированный-entries.проблема';

describe('13 — типизированный Object.entries', () => {
    test('ключи и значения выводятся из объекта', () => {
        expectTypeOf(entriesOf({ name: 'Макс', age: 30 })).toEqualTypeOf<
            ['name' | 'age', string | number][]
        >();
    });

    test('пары те же, что у Object.entries', () => {
        expect(entriesOf({ name: 'Макс', age: 30 })).toEqual([
            ['name', 'Макс'],
            ['age', 30],
        ]);
    });

    test('значения можно складывать как числа', () => {
        expect(total).toBe(130);
    });
});
