// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { type MyReturnType, doubled } from '../src/22-infer.решение';

describe('22 — infer достаёт тип из типа', () => {
    test('достаётся тип результата функции', () => {
        expectTypeOf<MyReturnType<() => number>>().toEqualTypeOf<number>();
        expectTypeOf<MyReturnType<(a: string) => string[]>>().toEqualTypeOf<string[]>();
    });

    test('совпадает со встроенным ReturnType', () => {
        expectTypeOf<MyReturnType<() => void>>().toEqualTypeOf<ReturnType<() => void>>();
    });

    test('число посчитано', () => {
        expect(doubled).toBe(84);
    });
});
