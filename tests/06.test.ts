import { describe, test, expect, expectTypeOf } from 'vitest';
import { assign } from '../src/06-тип-поля-в-аргументе.проблема';

describe('06 — T[K] в позиции аргумента', () => {
    const user = { name: 'Макс', age: 30 };

    test('значение обязано подходить типу поля', () => {
        // @ts-expect-error возраст — число, а не строка
        assign(user, 'age', 'тридцать');
    });

    test('подходящее значение записывается', () => {
        expect(assign(user, 'age', 31)).toEqual({ name: 'Макс', age: 31 });
    });

    test('исходный объект не меняется', () => {
        assign(user, 'age', 31);
        expect(user.age).toBe(30);
    });
});
