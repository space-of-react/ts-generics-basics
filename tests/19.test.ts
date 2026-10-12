import { describe, test, expect, expectTypeOf } from 'vitest';
import { type UserValue, values } from '../src/19-индексный-доступ.проблема';

describe('19 — индексный доступ T[keyof T]', () => {
    test('UserValue — объединение типов всех полей', () => {
        expectTypeOf<UserValue>().toEqualTypeOf<string | number>();
    });

    test('значения обоих типов подходят', () => {
        expect(values).toEqual([1, 'Макс']);
    });
});
