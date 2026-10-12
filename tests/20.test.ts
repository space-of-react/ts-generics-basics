import { describe, test, expect, expectTypeOf } from 'vitest';
import { type MyPartial, patch } from '../src/20-mapped-тип.проблема';

describe('20 — mapped-тип и модификатор ?', () => {
    test('все поля становятся опциональными', () => {
        expectTypeOf<MyPartial<{ name: string; age: number }>>().toEqualTypeOf<{
            name?: string;
            age?: number;
        }>();
    });

    test('совпадает со встроенным Partial', () => {
        expectTypeOf<MyPartial<{ name: string }>>().toEqualTypeOf<Partial<{ name: string }>>();
    });

    test('частичный объект собирается', () => {
        expect(patch).toEqual({ age: 31 });
    });
});
