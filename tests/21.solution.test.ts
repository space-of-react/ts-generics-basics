// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import type { IsString } from '../src/21-условный-тип.решение';

describe('21 — условный тип', () => {
    test('для строки — true', () => {
        expectTypeOf<IsString<'привет'>>().toEqualTypeOf<true>();
    });

    test('для числа — false', () => {
        expectTypeOf<IsString<number>>().toEqualTypeOf<false>();
    });

    test('ответ конкретный, а не boolean', () => {
        expectTypeOf<IsString<number>>().not.toEqualTypeOf<boolean>();
    });
});
