export const ROUTES = {
    home: '/',
    profile: '/me',
} as const;

export type Route = keyof typeof ROUTES;

export const path: Route = 'profile';
