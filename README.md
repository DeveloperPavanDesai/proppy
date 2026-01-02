# Proppy

This document outlines the clean architecture structure of the Proppy application.

## Project Structure

```
Proppy/
├── app/                    # Expo Router screens (file-based routing)
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Entry point (redirects to login)
│   └── login.tsx          # Login screen
│
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (Button, Input, etc.)
│   │   └── index.ts       # Component exports
│   │
│   ├── config/            # Configuration files
│   │   └── env.ts         # Environment variables
│   │
│   ├── constants/         # App-wide constants
│   │   └── index.ts       # API endpoints, storage keys, validation rules
│   │
│   ├── themes/            # Theme configuration
│   │   ├── colors.ts      # Color palette (light/dark)
│   │   ├── typography.ts  # Font sizes, weights, families
│   │   ├── spacing.ts     # Spacing values
│   │   └── index.ts       # Theme exports
│   │
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts       # Shared types and interfaces
│   │
│   └── utils/             # Utility functions
│       ├── validation.ts  # Form validation helpers
│       ├── storage.ts     # AsyncStorage wrapper
│       ├── helpers.ts     # General utility functions
│       └── index.ts      # Utility exports
│
├── assets/                # Static assets (images, fonts, etc.)
├── app.json               # Expo configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```