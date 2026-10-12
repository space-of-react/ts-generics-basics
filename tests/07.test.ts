import { describe, test, expect, expectTypeOf } from 'vitest';
import { save, savedAge } from '../src/07-ограничение-не-обрезает.проблема';

describe('07 — extends ограничивает, но не обрезает', () => {
    test('тип сохраняется целиком', () => {
        expectTypeOf(save({ name: 'Макс', age: 30 })).toEqualTypeOf<{
            name: string;
            age: number;
        }>();
    });

    test('лишние поля доступны после вызова', () => {
        expect(savedAge).toBe(30);
    });
});
