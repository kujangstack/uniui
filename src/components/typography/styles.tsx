import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  root: {
    fontFamily: theme.typography.body.fontFamily,

    variants: {
      /**
       * Text color
       */
      color: {
        'text.primary': {
          color: theme.palette.text.primary,
        },
        'text.secondary': {
          color: theme.palette.text.secondary,
        },
        'text.disabled': {
          color: theme.palette.text.disabled,
        },
        'primary.main': {
          color: theme.palette.primary.main,
        },
        'primary.dark': {
          color: theme.palette.primary.dark,
        },
        'primary.light': {
          color: theme.palette.primary.light,
        },
        'secondary.main': {
          color: theme.palette.secondary.main,
        },
        'secondary.dark': {
          color: theme.palette.secondary.dark,
        },
        'secondary.light': {
          color: theme.palette.secondary.light,
        },
        'common.black': {
          color: theme.palette.common.black,
        },
        'common.white': {
          color: theme.palette.common.white,
        },
      },

      /**
       * Typography variant
       */
      variant: {
        body: {
          fontSize: theme.typography.body.fontSize,
          lineHeight: theme.typography.body.lineHeight,
        },
        subtitle: {
          fontSize: theme.typography.subtitle.fontSize,
          lineHeight: theme.typography.subtitle.lineHeight,
        },
        caption: {
          fontSize: theme.typography.caption.fontSize,
          lineHeight: theme.typography.caption.lineHeight,
        },
        button: {
          fontSize: theme.typography.button.fontSize,
          lineHeight: theme.typography.button.lineHeight,
        },
        h6: {
          fontSize: theme.typography.h6.fontSize,
          lineHeight: theme.typography.h6.lineHeight,
        },
        h5: {
          fontSize: theme.typography.h5.fontSize,
          lineHeight: theme.typography.h5.lineHeight,
        },
        h4: {
          fontSize: theme.typography.h4.fontSize,
          lineHeight: theme.typography.h4.lineHeight,
        },
        h3: {
          fontSize: theme.typography.h3.fontSize,
          lineHeight: theme.typography.h3.lineHeight,
        },
        h2: {
          fontSize: theme.typography.h2.fontSize,
          lineHeight: theme.typography.h2.lineHeight,
        },
        h1: {
          fontSize: theme.typography.h1.fontSize,
          lineHeight: theme.typography.h1.lineHeight,
        },
      },

      /**
       * Font weight.
       */
      fontWeight: {
        light: {
          fontWeight: theme.typography.body.fontWeightLight,
        },
        normal: {
          fontWeight: theme.typography.body.fontWeightRegular,
        },
        bold: {
          fontWeight: theme.typography.body.fontWeightBold,
        },
        200: {
          fontWeight: theme.typography.body.fontWeightLight,
        },
        300: {
          fontWeight: theme.typography.body.fontWeightLight,
        },
        400: {
          fontWeight: theme.typography.body.fontWeightMedium,
        },
        500: {
          fontWeight: theme.typography.body.fontWeightMedium,
        },
        600: {
          fontWeight: theme.typography.body.fontWeightBold,
        },
        700: {
          fontWeight: theme.typography.body.fontWeightBold,
        },
      },
    },
  },
}));
