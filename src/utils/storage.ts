import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants';

export const storage = {
  // Get item from storage
  get: async <T = string>(key: string): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error(`Error getting storage key ${key}:`, error);
      return null;
    }
  },

  // Set item in storage
  set: async <T>(key: string, value: T): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting storage key ${key}:`, error);
      return false;
    }
  },

  // Remove item from storage
  remove: async (key: string): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing storage key ${key}:`, error);
      return false;
    }
  },

  // Clear all storage
  clear: async (): Promise<boolean> => {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  },

  // Get multiple items
  getMultiple: async (keys: string[]): Promise<Record<string, any>> => {
    try {
      const values = await AsyncStorage.multiGet(keys);
      const result: Record<string, any> = {};
      values.forEach(([key, value]) => {
        result[key] = value ? JSON.parse(value) : null;
      });
      return result;
    } catch (error) {
      console.error('Error getting multiple storage keys:', error);
      return {};
    }
  },
};

// Convenience functions for common storage operations
export const getAuthToken = () => storage.get<string>(STORAGE_KEYS.AUTH_TOKEN);
export const setAuthToken = (token: string) => storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
export const removeAuthToken = () => storage.remove(STORAGE_KEYS.AUTH_TOKEN);

export const getUserData = <T = any>() => storage.get<T>(STORAGE_KEYS.USER_DATA);
export const setUserData = <T>(data: T) => storage.set(STORAGE_KEYS.USER_DATA, data);
export const removeUserData = () => storage.remove(STORAGE_KEYS.USER_DATA);

export default storage;

