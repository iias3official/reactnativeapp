import { COLORS } from './colors';
import { FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS } from './typography';
import { SPACING, SIZES, BORDER_WIDTH } from './spacing';
import { Platform } from 'react-native';

export const SHADOWS = {
  small: Platform.select({
    ios: {
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 2,
    },
  }),
  medium: Platform.select({
    ios: {
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
    },
    android: {
      elevation: 4,
    },
  }),
  large: Platform.select({
    ios: {
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
    },
    android: {
      elevation: 8,
    },
  }),
  card: Platform.select({
    ios: {
      shadowColor: COLORS.shadowDark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    android: {
      elevation: 3,
    },
  }),
};

export const THEME = {
  colors: COLORS,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  lineHeights: LINE_HEIGHTS,
  spacing: SPACING,
  sizes: SIZES,
  borderWidth: BORDER_WIDTH,
  shadows: SHADOWS,
};

export { COLORS, FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, SPACING, SIZES, BORDER_WIDTH };
