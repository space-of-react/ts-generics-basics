import { describe, test, expect, expectTypeOf } from 'vitest';
import { lengthOf } from '../src/04-ограничение-по-структуре.проблема';

describe('04 — ограничение по структуре', () => {
    test('работает со строкой и массивом', () => {
        expect(lengthOf('привет')).toBe(6);
        expect(lengthOf([1, 2, 3])).toBe(3);
    });

    test('подходит любой объект, у которого есть length', () => {
        expect(lengthOf({ length: 10 })).toBe(10);
    });

    test('число не проходит ограничение', () => {
        // @ts-expect-error у числа нет length
        lengthOf(42);
    });
});
