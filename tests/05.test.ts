import { describe, test, expect, expectTypeOf } from 'vitest';
import { prop } from '../src/05-ключ-и-тип-поля.проблема';

describe('05 — K extends keyof T', () => {
    const user = { name: 'Макс', age: 30 };

    test('тип результата зависит от ключа', () => {
        expectTypeOf(prop(user, 'age')).toEqualTypeOf<number>();
        expectTypeOf(prop(user, 'name')).toEqualTypeOf<string>();
    });

    test('значение читается правильно', () => {
        expect(prop(user, 'name')).toBe('Макс');
    });

    test('несуществующий ключ не проходит', () => {
        // @ts-expect-error у user нет поля email
        prop(user, 'email');
    });
});
