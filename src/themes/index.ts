export { Colors } from './colors';
export type { ColorScheme } from './colors';
export { Spacing } from './spacing';
export { Typography } from './typography';

import { Colors } from './colors';
import { Spacing } from './spacing';
import { Typography } from './typography';

export const Theme = {
  Colors,
  Typography,
  Spacing,
} as const;

export default Theme;