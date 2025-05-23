// react-native-unistyles
import { StyleSheet } from 'react-native-unistyles';
import { ReactNativeStyleSheet } from 'react-native-unistyles/lib/typescript/src/types';

// constants
import { COMPONENT_VARIANT_SIZE } from '../../constants';
import { DEFAULT_BORDER_WIDTH, MAX_BORDER_WIDTH } from './constants';

// interfaces
import { IStylesheetExtraStyles } from 'src/types';
import { ButtonColor, ButtonProps } from './types';
import { Theme } from 'src/theme';

export interface IButtonStylesheet extends IStylesheetExtraStyles<ButtonProps> {
  base: any;
}

/**
 * Base button styles.
 */
export const buttonStyles = StyleSheet.create<
  ReactNativeStyleSheet<IButtonStylesheet>
>((theme: Theme) => ({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      // #start styles button color.
      color: {
        primary: {},
        secondary: {},
        success: {},
        info: {},
        warning: {},
        error: {},
      },
      // #end styles button color.

      // #start styles button variant.
      variant: {
        contained: {},
        outlined: {
          backgroundColor: 'transparent',
        },
        text: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
      },
      // #end styles button variant.

      // #start styles button size.
      size: {
        'small': {
          height: COMPONENT_VARIANT_SIZE.small,
          paddingHorizontal: theme.utils.createSpacing(3),
        },
        'medium': {
          height: COMPONENT_VARIANT_SIZE.medium,
          paddingHorizontal: theme.utils.createSpacing(4),
        },
        'large': {
          height: COMPONENT_VARIANT_SIZE.large,
          paddingHorizontal: theme.utils.createSpacing(5),
        },
        'extra-large': {
          height: COMPONENT_VARIANT_SIZE['extra-large'],
          paddingHorizontal: theme.utils.createSpacing(5.8),
        },
      },
      // #start styles button size.
    },
  },

  extraStyles: ({ variant, color, rounded, borderWidth }) => {
    let styles = {};

    // #start rounded styles
    if (typeof rounded === 'number') {
      styles = {
        ...styles,
        borderRadius: rounded,
      };
    }
    if (!rounded) {
      styles = {
        ...styles,
        borderRadius: theme.shape.borderRadius,
      };
    }
    if (rounded === true) {
      styles = {
        ...styles,
        borderRadius: COMPONENT_VARIANT_SIZE['extra-large'],
      };
    }
    // #end rounded styles

    // #start border width
    if (!borderWidth) {
      styles = {
        ...styles,
        borderWidth: DEFAULT_BORDER_WIDTH,
      };
    }
    if (typeof borderWidth === 'number') {
      styles = {
        ...styles,
        borderWidth: borderWidth > MAX_BORDER_WIDTH ? 1 : borderWidth,
      };
    }
    // #end  border width styles

    // #start contained button style
    if (color && variant === 'contained') {
      styles = {
        ...styles,
        backgroundColor: theme.palette?.[color]?.main,
        borderColor: theme.palette?.[color]?.main,
      };
    }
    // #end contained button style

    // #start outlined button style
    if (color && variant === 'outlined') {
      styles = {
        ...styles,
        borderColor: theme.palette?.[color]?.main,
      };
    }
    // #end outlined button style

    return styles;
  },
}));

/**
 * Pressed button styles.
 */
export const pressedButtonStyles = StyleSheet.create<
  ReactNativeStyleSheet<IButtonStylesheet>
>((theme: Theme) => ({
  base: {
    variants: {
      // #start styles button color.
      color: {
        primary: {},
        secondary: {},
        success: {},
        info: {},
        warning: {},
        error: {},
      },
      // #end styles button color.

      // #start styles button variant.
      variant: {
        contained: {},
        outlined: {},
        text: {},
      },
      // #end styles button variant.
    },
  },

  extraStyles: ({ variant, color }) => {
    let styles = {};

    // #start pressed variant outlined styles
    if (color && variant === 'outlined') {
      styles = {
        ...styles,
        backgroundColor: theme.palette?.[color]?.light,
        borderColor: theme.palette?.[color]?.main,
      };
    }
    // #end pressed variant outlined styles

    // #start pressed variant contained styles
    if (color && variant === 'contained') {
      styles = {
        ...styles,
        backgroundColor: theme.palette?.[color]?.dark,
        borderColor: theme.palette?.[color]?.dark,
      };
    }
    // #end pressed variant contained styles

    // #start pressed variant contained styles
    if (color && variant === 'text') {
      styles = {
        ...styles,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      };
    }
    // #end pressed variant contained styles

    return styles;
  },
}));

/**
 * Button text styles.
 */
export const buttonTextStyles = StyleSheet.create<
  ReactNativeStyleSheet<IButtonStylesheet>
>((theme: Theme) => ({
  base: {
    textAlign: 'center',
    lineHeight: theme.typography.button.lineHeight,
    fontFamily: theme.typography.button.fontFamily,
    fontWeight: theme.typography.button.fontWeightRegular,
    letterSpacing: theme.typography.button.letterSpacing,
    variants: {
      // #start variant color text styles
      color: {
        primary: {
          color: theme.palette.primary.contrastText,
        },
        secondary: {
          color: theme.palette.secondary.contrastText,
        },
        success: {
          color: theme.palette.success.contrastText,
        },
        info: {
          color: theme.palette.info.contrastText,
        },
        warning: {
          color: theme.palette.warning.contrastText,
        },
        error: {
          color: theme.palette.error.contrastText,
        },
      },
      // #end variant color text styles

      // #start variant text styles
      variant: {
        contained: {},
        outlined: {},
        text: {},
      },
      // #end variant text styles

      // #start font size
      size: {
        'small': {
          fontSize: 12,
          lineHeight: 14.5,
        },
        'medium': {
          fontSize: 14,
          lineHeight: 16.5,
        },
        'large': {
          fontSize: 14.75,
          lineHeight: 17,
        },
        'extra-large': {
          fontSize: 16,
          lineHeight: 20,
        },
      },
      // #end font size
    },
  },
  extraStyles: ({ color, variant }) => {
    if ((color && variant === 'outlined') || variant === 'text') {
      return {
        color: theme.palette?.[color as ButtonColor]?.main,
      };
    }
    return {};
  },
}));
