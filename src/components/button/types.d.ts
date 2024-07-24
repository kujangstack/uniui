import { ReactNode } from 'react';
import { PressableProps, TextStyle } from 'react-native';

// types
import { ThemePalette } from '@/theme/theme.type';
import { NullableAccessibilityProps } from '@/types';

export type ButtonColor = keyof Pick<
  ThemePalette,
  'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
>;

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps
  extends PressableProps,
    NullableAccessibilityProps {
  /**
   * Button color.
   * @type 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * Button variant.
   * @type ButtonVariant
   * @default 'contained'
   */
  variant?: ButtonVariant;

  /**
   * Button size.
   * @type 'small' | 'medium' | 'large' | 'extra-large';
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | 'extra-large';

  /**
   * Button text weight.
   * @type TextStyle['fontWeight']
   * @default 'normal'
   */
  // fontWeight?: TextStyle['fontWeight'];

  /**
   * Text to display inside the button. Or react node
   * @type string | ReactNode;
   */
  title: string | ReactNode;

  /**
   * Button text style.
   * @type TextStyle
   * @default undefined
   */
  textStyle?: TextStyle;

  /**
   * Button rounded.
   * @type undefined | boolean | number
   * @default undefined
   */
  rounded?: boolean | number;

  /**
   * Button border for variant outlined & contained. Maximum 7
   * @type number | undefined
   * @default 1
   */
  borderWidth?: number | undefined;
}
