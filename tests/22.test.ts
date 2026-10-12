import { describe, test, expect, expectTypeOf } from 'vitest';
import { type MyReturnType, doubled } from '../src/22-infer.проблема';

describe('22 — infer достаёт тип из типа', () => {
    test('достаётся тип результата функции', () => {
        expectTypeOf<MyReturnType<() => number>>().toEqualTypeOf<number>();
        expectTypeOf<MyReturnType<(a: string) => string[]>>().toEqualTypeOf<string[]>();
    });

    test('совпадает со встроенным ReturnType', () => {
        expectTypeOf<MyReturnType<() => void>>().toEqualTypeOf<ReturnType<() => void>>();
    });

    test('число посчитано', () => {
        expect(doubled).toBe(84);
    });
});
