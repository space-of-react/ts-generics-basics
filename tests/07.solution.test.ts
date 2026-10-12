// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { save, savedAge } from '../src/07-ограничение-не-обрезает.решение';

describe('07 — extends ограничивает, но не обрезает', () => {
    test('тип сохраняется целиком', () => {
        expectTypeOf(save({ name: 'Макс', age: 30 })).toEqualTypeOf<{
            name: string;
            age: number;
        }>();
    });

    test('лишние поля доступны после вызова', () => {
        expect(savedAge).toBe(30);
    });
});
