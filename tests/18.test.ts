import { describe, test, expect, expectTypeOf } from 'vitest';
import { type Route, ROUTES, path } from '../src/18-keyof-typeof.проблема';

describe('18 — keyof typeof по константе', () => {
    test('Route — это ключи ROUTES', () => {
        expectTypeOf<Route>().toEqualTypeOf<'home' | 'profile'>();
    });

    test('значения не расширились до string', () => {
        expectTypeOf(ROUTES.home).toEqualTypeOf<'/'>();
    });

    test('по ключу достаётся путь', () => {
        expect(ROUTES[path]).toBe('/me');
    });
});
