import { describe, test, expect, expectTypeOf } from 'vitest';
import { pick, shortName } from '../src/12-pick.проблема';

describe('12 — своя реализация pick', () => {
    const user = { name: 'Макс', age: 30, admin: true };

    test('в типе результата остаются только выбранные поля', () => {
        expectTypeOf(pick(user, ['name', 'age'])).toEqualTypeOf<{
            name: string;
            age: number;
        }>();
    });

    test('значения копируются', () => {
        expect(pick(user, ['name', 'age'])).toEqual({ name: 'Макс', age: 30 });
        expect(shortName).toBe('Макс');
    });

    test('чужой ключ не проходит', () => {
        // @ts-expect-error у user нет поля email
        pick(user, ['email']);
    });
});
