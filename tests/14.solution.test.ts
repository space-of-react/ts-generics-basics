// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { once, sum } from '../src/14-сигнатура-целиком.решение';

describe('14 — перенос сигнатуры целиком', () => {
    test('аргументы и результат не теряются', () => {
        const onceAdd = once((a: number, b: number) => a + b);
        expectTypeOf(onceAdd).parameters.toEqualTypeOf<[number, number]>();
        expectTypeOf(onceAdd).returns.toEqualTypeOf<number>();
    });

    test('исходная функция вызывается один раз', () => {
        let calls = 0;
        const next = once(() => ++calls);
        expect(next()).toBe(1);
        expect(next()).toBe(1);
        expect(calls).toBe(1);
    });

    test('результат остаётся числом', () => {
        expect(sum).toBe(4);
    });
});
