import { describe, test, expect, expectTypeOf } from 'vitest';
import { Registry } from '../src/16-ограничение-у-класса.проблема';

describe('16 — ограничение параметра типа у класса', () => {
    test('поиск по id возвращает элемент целиком', () => {
        const registry = new Registry<{ id: number; name: string }>();
        registry.add({ id: 1, name: 'Макс' });
        expect(registry.byId(1)).toEqual({ id: 1, name: 'Макс' });
        expect(registry.byId(2)).toBeUndefined();
    });

    test('тип элемента сохраняется', () => {
        const registry = new Registry<{ id: number; name: string }>();
        expectTypeOf(registry.byId(1)).toEqualTypeOf<{ id: number; name: string } | undefined>();
    });

    test('тип без id не проходит', () => {
        // @ts-expect-error у string нет поля id
        const broken = new Registry<string>();
    });
});
