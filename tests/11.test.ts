import { describe, test, expect, expectTypeOf } from 'vitest';
import { parseJson } from '../src/11-тип-надо-проверить-а-не-пообещать.проблема';

type User = { id: number };

const isUser = (value: unknown): value is User =>
    typeof value === 'object' && value !== null && typeof (value as User).id === 'number';

describe('11 — тип надо проверить, а не пообещать', () => {
    test('подходящие данные проходят проверку', () => {
        expect(parseJson('{"id":1}', isUser)).toEqual({ id: 1 });
    });

    test('чужие данные дают null, а не ложный тип', () => {
        expect(parseJson('{"name":"Макс"}', isUser)).toBeNull();
    });

    test('результат обязан быть проверен перед использованием', () => {
        expectTypeOf(parseJson('{"id":1}', isUser)).toEqualTypeOf<User | null>();
    });
});
