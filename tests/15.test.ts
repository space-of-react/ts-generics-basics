import { describe, test, expect, expectTypeOf } from 'vitest';
import { Box, nameLength } from '../src/15-дженерик-класс-и-метод.проблема';

describe('15 — дженерик у класса и у метода', () => {
    test('тип содержимого выводится из конструктора', () => {
        expectTypeOf(new Box(42).get()).toEqualTypeOf<number>();
    });

    test('map меняет тип содержимого', () => {
        expectTypeOf(new Box('Макс').map((name) => name.length).get()).toEqualTypeOf<number>();
    });

    test('длина посчитана', () => {
        expect(nameLength).toBe(4);
    });
});
