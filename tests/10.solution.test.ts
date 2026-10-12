// ⚙️ АВТОГЕНЕРАЦИЯ — не редактируй вручную.
// Это копия соседнего теста задания с импортом решения вместо проблемы.
// Правь исходный tests/NN.test.ts и запусти: npm run play:generate

import { describe, test, expect, expectTypeOf } from 'vitest';
import { pickDefault } from '../src/10-noinfer.решение';

describe('10 — NoInfer запрещает расширять T', () => {
    const langs: ('ru' | 'en')[] = ['ru', 'en'];

    test('берётся первый элемент', () => {
        expect(pickDefault(langs, 'en')).toBe('ru');
    });

    test('на пустом списке берётся запасное значение', () => {
        expect(pickDefault<'ru' | 'en'>([], 'en')).toBe('en');
    });

    test('чужое значение не расширяет T, а падает', () => {
        // @ts-expect-error 'de' не входит в ('ru' | 'en')
        pickDefault(langs, 'de');
    });
});
