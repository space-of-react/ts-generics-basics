// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { toTuple, entry } from '../src/09-as-const-и-кортеж.решение';

describe('09 — as const превращает массив в кортеж', () => {
    test('на выходе кортеж, а не объединение', () => {
        expectTypeOf(toTuple('Макс', 30)).toEqualTypeOf<readonly [string, number]>();
    });

    test('порядок и длина зафиксированы', () => {
        expect(entry).toEqual(['Макс', 30]);
        expect(entry.length).toBe(2);
    });
});
