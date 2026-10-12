// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { identity, age } from '../src/01-дженерик-функция.решение';

describe('01 — дженерик-функция', () => {
    test('тип результата повторяет тип аргумента', () => {
        expectTypeOf(identity(42)).toEqualTypeOf<number>();
        expectTypeOf(identity('Макс')).toEqualTypeOf<string>();
    });

    test('age выведен как number', () => {
        expectTypeOf(age).toEqualTypeOf<number>();
    });

    test('значение возвращается как есть', () => {
        expect(identity(42)).toBe(42);
    });
});
