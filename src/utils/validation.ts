import { VALIDATION } from '../constants';

export const validateEmail = (email: string): boolean => {
  if (!email || email.trim().length === 0) {
    return false;
  }
  return VALIDATION.EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (!password || password.length === 0) {
    errors.push('Password is required');
    return { isValid: false, errors };
  }

  if (password.length < VALIDATION.PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${VALIDATION.PASSWORD_MIN_LENGTH} characters`);
  }

  if (password.length > VALIDATION.PASSWORD_MAX_LENGTH) {
    errors.push(`Password must be less than ${VALIDATION.PASSWORD_MAX_LENGTH} characters`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateUsername = (username: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (!username || username.trim().length === 0) {
    errors.push('Username is required');
    return { isValid: false, errors };
  }

  if (username.length < VALIDATION.USERNAME_MIN_LENGTH) {
    errors.push(`Username must be at least ${VALIDATION.USERNAME_MIN_LENGTH} characters`);
  }

  if (username.length > VALIDATION.USERNAME_MAX_LENGTH) {
    errors.push(`Username must be less than ${VALIDATION.USERNAME_MAX_LENGTH} characters`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export default {
  validateEmail,
  validatePassword,
  validateUsername,
};