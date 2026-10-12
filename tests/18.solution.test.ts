// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { type Route, ROUTES, path } from '../src/18-keyof-typeof.решение';

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
