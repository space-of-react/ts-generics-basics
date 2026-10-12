import { describe, test, expect, expectTypeOf } from 'vitest';
import { type NonNullableOf, shout } from '../src/23-распределение-по-union.проблема';

describe('23 — распределение условного типа по объединению', () => {
    test('null и undefined вычищаются', () => {
        expectTypeOf<NonNullableOf<string | null | undefined>>().toEqualTypeOf<string>();
    });

    test('остальные члены объединения сохраняются', () => {
        expectTypeOf<NonNullableOf<string | number | null>>().toEqualTypeOf<string | number>();
    });

    test('строка обрабатывается', () => {
        expect(shout('привет')).toBe('ПРИВЕТ');
    });
});
