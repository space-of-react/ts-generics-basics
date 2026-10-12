// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { type UserValue, values } from '../src/19-индексный-доступ.решение';

describe('19 — индексный доступ T[keyof T]', () => {
    test('UserValue — объединение типов всех полей', () => {
        expectTypeOf<UserValue>().toEqualTypeOf<string | number>();
    });

    test('значения обоих типов подходят', () => {
        expect(values).toEqual([1, 'Макс']);
    });
});
