export const Colors = {
  light: {
    // Primary Colors - Proppy.ai brand colors
    primary: '#15406F',
    primaryDark: '#0f2d4f',
    primaryLight: '#1e5a9f',
    
    // Secondary Colors
    secondary: '#5856D6',
    secondaryDark: '#3634A3',
    secondaryLight: '#AF52DE',
    
    // Background Colors
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    backgroundTertiary: '#E8ECF1',
    backgroundLightBlue: '#E8ECF1',
    
    // Text Colors
    text: '#000000',
    textSecondary: '#3C3C43',
    textTertiary: '#8E8E93',
    textInverse: '#FFFFFF',
    
    // Status Colors
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FF9500',
    info: '#15406F',
    
    // Border Colors
    border: '#C6C6C8',
    borderLight: '#E5E5EA',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.4)',
    
    // Input Colors
    inputBackground: '#F8F9FA',
    inputBorder: '#C6C6C8',
    inputFocus: '#15406F',
  },
  dark: {
    // Primary Colors
    primary: '#0A84FF',
    primaryDark: '#0051D5',
    primaryLight: '#5AC8FA',
    
    // Secondary Colors
    secondary: '#5E5CE6',
    secondaryDark: '#3634A3',
    secondaryLight: '#BF5AF2',
    
    // Background Colors
    background: '#000000',
    backgroundSecondary: '#1C1C1E',
    backgroundTertiary: '#2C2C2E',
    
    // Text Colors
    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
    textTertiary: '#8E8E93',
    textInverse: '#000000',
    
    // Status Colors
    success: '#30D158',
    error: '#FF453A',
    warning: '#FF9F0A',
    info: '#0A84FF',
    
    // Border Colors
    border: '#38383A',
    borderLight: '#2C2C2E',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.6)',
    
    // Input Colors
    inputBackground: '#1C1C1E',
    inputBorder: '#38383A',
    inputFocus: '#15406F',
  },
} as const;

export type ColorScheme = keyof typeof Colors;