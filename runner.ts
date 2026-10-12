// Запасной путь: если у задания ещё нет парного теста, generate-play-commands.mjs
// делает команду `vite`, и файл задания открывается здесь. Визуального результата
// у задач про типы нет — runner просто импортирует модуль и говорит, куда смотреть.
// Нормальный путь запуска — `npm run task:01-01` (vitest --ui).

function getEntryFromEnvOrUrl(): string | null {
    const fromEnv = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_ENTRY;
    if (fromEnv) return fromEnv;
    return new URL(window.location.href).searchParams.get('f');
}

function normalizeToVitePath(entry: string): string {
    let normalized = entry.replace(/\\/g, '/');
    if (normalized.startsWith('./')) normalized = normalized.slice(2);
    if (!normalized.startsWith('/')) normalized = '/' + normalized;
    return normalized;
}

function showInfo(message: string): void {
    const el = document.getElementById('root');
    if (el) {
        el.innerHTML =
            '<div style="font-family: ui-monospace, monospace; padding: 24px; line-height: 1.6;">' +
            message +
            '</div>';
    }
}

async function run(): Promise<void> {
    const entry = getEntryFromEnvOrUrl();
    if (!entry) {
        showInfo(
            'Не указан <code>VITE_ENTRY</code> или параметр <code>?f=...</code>.<br/>' +
                'Запусти задание: <code>npm run task:01-01</code>'
        );
        return;
    }

    const path = normalizeToVitePath(entry);
    try {
        await import(/* @vite-ignore */ path);
        showInfo(
            'Файл загружен: <code>' +
                path +
                '</code><br/>' +
                'Это задание про типы — открой файл в редакторе и убери ошибку компилятора.<br/>' +
                'Проверка типов идёт в тестах: <code>npm run task:NN-NN</code>.'
        );
    } catch (error) {
        const stack = (error as Error)?.stack ?? String(error);
        showInfo(
            'Ошибка импорта: <code>' +
                path +
                '</code><pre style="white-space:pre-wrap; margin-top: 12px;">' +
                stack +
                '</pre>'
        );
        console.error(error);
    }
}

void run();
