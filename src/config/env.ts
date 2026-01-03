export const ENV = {
  // API Configuration
  API_URL: process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com',
  API_TIMEOUT: parseInt(process.env.EXPO_PUBLIC_API_TIMEOUT || '10000', 10),

  // App Configuration
  APP_NAME: process.env.EXPO_PUBLIC_APP_NAME || 'Proppy',
  APP_VERSION: process.env.EXPO_PUBLIC_APP_VERSION || '1.0.0',

  // Feature Flags
  ENABLE_ANALYTICS: process.env.EXPO_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_LOGGING: process.env.EXPO_PUBLIC_ENABLE_LOGGING !== 'false',

  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
} as const;

export default ENV;