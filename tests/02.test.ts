import { describe, test, expect, expectTypeOf } from 'vitest';
import { type Box, score } from '../src/02-дженерик-тип.проблема';

describe('02 — дженерик у типа', () => {
    test('Box параметризуется любым типом', () => {
        expectTypeOf<Box<number>>().toEqualTypeOf<{ value: number }>();
        expectTypeOf<Box<string[]>>().toEqualTypeOf<{ value: string[] }>();
    });

    test('значение внутри — число, а не строка', () => {
        expect(score.value + 1).toBe(11);
    });
});
