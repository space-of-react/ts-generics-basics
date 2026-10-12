// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { withRetry, userId } from '../src/17-дженерик-и-promise.решение';

describe('17 — дженерик и Promise', () => {
    test('тип доезжает через Promise', () => {
        expectTypeOf(withRetry(async () => ({ id: 1 }))).toEqualTypeOf<Promise<{ id: number }>>();
    });

    test('Awaited снимает Promise с типа результата', () => {
        expectTypeOf<Awaited<Promise<{ id: number }>>>().toEqualTypeOf<{ id: number }>();
    });

    test('после ошибки загрузка повторяется', async () => {
        let calls = 0;
        const result = await withRetry(async () => {
            calls += 1;
            if (calls === 1) throw new Error('сеть');
            return 'ок';
        });
        expect(result).toBe('ок');
        expect(calls).toBe(2);
    });

    test('id дочитан из результата', async () => {
        expect(await userId).toBe(1);
    });
});
