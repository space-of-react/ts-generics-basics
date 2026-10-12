// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { type MyPartial, patch } from '../src/20-mapped-тип.решение';

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
