export const API_TIMEOUT = 30000;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'studyos_token',
  REFRESH_TOKEN: 'studyos_refresh_token',
  USER: 'studyos_user',
};

export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/notes',
  NOTES: '/notes',
  FLASHCARDS: '/flashcards',
  POMODORO: '/pomodoro',
  RESOURCES: '/resources',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
};

export const PERMISSIONS = {
  NOTES: {
    CREATE: 'notes:create',
    READ: 'notes:read',
    UPDATE: 'notes:update',
    DELETE: 'notes:delete',
  },
  FLASHCARDS: {
    CREATE: 'flashcards:create',
    READ: 'flashcards:read',
    UPDATE: 'flashcards:update',
    DELETE: 'flashcards:delete',
  },
  POMODORO: {
    CREATE: 'pomodoro:create',
    READ: 'pomodoro:read',
  },
  RESOURCES: {
    CREATE: 'resources:create',
    READ: 'resources:read',
    UPDATE: 'resources:update',
    DELETE: 'resources:delete',
  },
  ANALYTICS: {
    READ: 'analytics:read',
  },
};
