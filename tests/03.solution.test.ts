// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { mapItems, lengths } from '../src/03-два-параметра-типа.решение';

describe('03 — два параметра типа: из аргумента и из колбэка', () => {
    test('тип элемента доезжает до колбэка, тип результата — до массива', () => {
        expectTypeOf(mapItems([1, 2], (n) => String(n))).toEqualTypeOf<string[]>();
    });

    test('lengths — массив чисел', () => {
        expectTypeOf(lengths).toEqualTypeOf<number[]>();
    });

    test('длины посчитаны', () => {
        expect(lengths).toEqual([3, 3]);
    });
});
