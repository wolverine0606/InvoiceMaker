import { createTheme, useTheme } from '@shopify/restyle';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { DARK_COLOR_PALETTE } from './colors';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const theme = createTheme({
  colors: {
    magentaBright: DARK_COLOR_PALETTE.primary[50], // Bright Magenta
    magentaMedium: DARK_COLOR_PALETTE.primary[30], // Medium Magenta
    magentaDeep: DARK_COLOR_PALETTE.primary[20], // Deep Magenta
    whiteOnMagenta: DARK_COLOR_PALETTE.primary[100], // White on Magenta

    yellowBright: DARK_COLOR_PALETTE.secondary[50], // Vibrant Yellow
    orangeBright: DARK_COLOR_PALETTE.gradient.orange, // Vivid Orange
    goldBright: DARK_COLOR_PALETTE.gradient.gold, // Golden Yellow
    blackOnYellow: DARK_COLOR_PALETTE.secondary[0], // Black on Yellow

    redBright: DARK_COLOR_PALETTE.tertiary[50], // Bright Red

    whiteBackground: DARK_COLOR_PALETTE.primary[100], // White Background
    magentaBrightText: DARK_COLOR_PALETTE.primary[50], // Bright Magenta Text
    whiteBackgroundYellowText: DARK_COLOR_PALETTE.secondary[100], // White with Yellow
    blackBackgroundYellowText: DARK_COLOR_PALETTE.secondary[0], // Black Background
    redBrightText: DARK_COLOR_PALETTE.tertiary[50], // Bright Red Text

    redSoft: DARK_COLOR_PALETTE.error[60], // Soft Red
    whiteOnError: DARK_COLOR_PALETTE.primary[100], // White on Error
    whiteErrorContainer: DARK_COLOR_PALETTE.primary[100], // White Error Background
    redOnErrorContainer: DARK_COLOR_PALETTE.error[60], // Red on Error

    blackJet: DARK_COLOR_PALETTE.neutral[0], // Jet Black
    whiteOnSurface: DARK_COLOR_PALETTE.primary[100], // White on Surface
    grayLight: DARK_COLOR_PALETTE.neutral[60], // Light Gray
    grayDark: DARK_COLOR_PALETTE.neutral[4], // Dark Gray
    grayVeryDark: DARK_COLOR_PALETTE.neutral[8], // Very Dark Gray
    grayCharcoal: DARK_COLOR_PALETTE.neutral[12], // Charcoal Gray
    grayGraphite: DARK_COLOR_PALETTE.neutral[16], // Graphite Gray
    graySmoky: DARK_COLOR_PALETTE.neutral[20], // Smoky Gray
    grayMedium: DARK_COLOR_PALETTE.neutral[40], // Medium Gray

    grayOutline: DARK_COLOR_PALETTE.neutral[60], // Light Gray Outline
    grayOutlineSoft: DARK_COLOR_PALETTE.neutral[30], // Soft Gray Outline

    dafaultText: DARK_COLOR_PALETTE.primary[100],
  },
  spacing: {
    xs_4: 4,
    s_8: 8,
    sm_12: 12,
    m_16: 16,
    ml_24: 24,
    l_32: 32,
    xl_64: 64,
  },
  borderRadii: {
    s_3: 3,
    m_6: 6,
    l_12: 12,
    xl_24: 24,
  },
  textVariants: {
    body: {
      fontSize: 16,
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    large: {
      fontSize: 36,
    },
    extra_large: {
      fontSize: 64,
      fontWeight: 'bold',
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export const useAppTheme = () => {
  return useTheme<AppTheme>();
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: AppTheme) => T
) => {
  return () => {
    return styles(theme);
  };
};

export type AppTheme = typeof theme;
export default theme;
