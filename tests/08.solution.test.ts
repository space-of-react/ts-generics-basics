// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { reset } from '../src/08-нельзя-собрать-T-из-воздуха.решение';

describe('08 — T нельзя собрать из воздуха', () => {
    test('лишние поля состояния сохраняются', () => {
        expect(reset({ count: 5, label: 'клики' })).toEqual({ count: 0, label: 'клики' });
    });

    test('тип состояния не теряется', () => {
        expectTypeOf(reset({ count: 5, label: 'клики' })).toEqualTypeOf<{
            count: number;
            label: string;
        }>();
    });

    test('исходный объект не меняется', () => {
        const state = { count: 5, label: 'клики' };
        reset(state);
        expect(state.count).toBe(5);
    });
});
