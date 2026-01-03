
// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
  },
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: '@proppy/auth_token',
  REFRESH_TOKEN: '@proppy/refresh_token',
  USER_DATA: '@proppy/user_data',
  THEME: '@proppy/theme',
} as const;

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
} as const;

// App Constants
export const APP_CONSTANTS = {
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 300,
  TOAST_DURATION: 3000,
} as const;

export * from './mockData';

export default {
  API_ENDPOINTS,
  STORAGE_KEYS,
  VALIDATION,
  APP_CONSTANTS,
};

