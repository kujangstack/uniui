import { createStyleSheet } from 'react-native-unistyles';

// constants
import { COMPONENT_VARIANT_SIZE } from '../../constants';

export const stylesheet = createStyleSheet((theme) => ({
  root: {
    width: '100%',
    variants: {
      textColor: {},
      variant: {},
    },
  },

  input: {
    fontFamily: theme.typography.body.fontFamily,
    paddingHorizontal: theme.utils.createSpacing(4),
    backgroundColor: theme.palette.background.paper,
    variants: {
      /**
       * TextField variant
       */
      variant: {
        outlined: {
          borderWidth: 1,
          borderRadius: theme.shape.borderRadius,
          borderColor: theme.palette.divider,
        },
      },

      /**
       * TextField size styles
       */
      size: {
        'small': {
          height: COMPONENT_VARIANT_SIZE.small,
          paddingVertical: theme.utils.createSpacing(1),
          fontSize: 12.25,
        },
        'medium': {
          height: COMPONENT_VARIANT_SIZE.medium,
          paddingVertical: theme.utils.createSpacing(2),
          fontSize: 13.5,
        },
        'large': {
          height: COMPONENT_VARIANT_SIZE.large,
          paddingVertical: theme.utils.createSpacing(3),
          fontSize: 14,
        },
        'extra-large': {
          height: COMPONENT_VARIANT_SIZE['extra-large'],
          paddingVertical: theme.utils.createSpacing(3.2),
          fontSize: 16,
        },
      },

      /**
       * Text color
       */
      textColor: {
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
