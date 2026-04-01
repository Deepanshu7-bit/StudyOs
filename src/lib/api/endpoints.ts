export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
    PERMISSIONS: '/auth/me/permissions',
  },
  NOTES: {
    LIST: '/notes',
    CREATE: '/notes',
    GET: (id: string) => `/notes/${id}`,
    UPDATE: (id: string) => `/notes/${id}`,
    DELETE: (id: string) => `/notes/${id}`,
  },
  FLASHCARDS: {
    LIST: '/flashcards',
    CREATE: '/flashcards',
    GET: (id: string) => `/flashcards/${id}`,
    UPDATE: (id: string) => `/flashcards/${id}`,
    DELETE: (id: string) => `/flashcards/${id}`,
  },
  POMODORO: {
    LIST: '/pomodoro',
    CREATE: '/pomodoro',
    GET: (id: string) => `/pomodoro/${id}`,
    UPDATE: (id: string) => `/pomodoro/${id}`,
  },
  RESOURCES: {
    LIST: '/resources',
    CREATE: '/resources',
    GET: (id: string) => `/resources/${id}`,
    UPDATE: (id: string) => `/resources/${id}`,
    DELETE: (id: string) => `/resources/${id}`,
  },
  ANALYTICS: {
    DASHBOARD: '/analytics/dashboard',
    STATS: '/analytics/stats',
  },
};
