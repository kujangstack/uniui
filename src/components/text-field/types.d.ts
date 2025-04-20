import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { ThemeTypographyColor } from '../../theme';

export type TextFieldVariant = 'outlined';

export type TextFieldSize = 'small' | 'medium' | 'large' | 'extra-large';

export interface TextFieldProps extends Omit<TextInputProps, 'style'> {
  /**
   * Root styles
   * @type StyleProp<ViewStyle> | undefined;
   * @default 'undefined'
   */
  style?: StyleProp<ViewStyle> | undefined;

  /**
   * Input styles
   * @type StyleProp<TextStyle> | undefined;
   * @default 'undefined'
   */
  inputStyle?: StyleProp<TextStyle> | undefined;

  /**
   * TextField variant
   * @type TextFieldVariant
   * @default 'outlined'
   */
  variant?: TextFieldVariant;

  /**
   * TextField size
   * @type TextFieldSize
   * @default 'medium'
   */
  size?: TextFieldSize;

  /**
   * Font weight
   * @type TextStyle['fontWeight']
   * @default 'normal'
   */
  fontWeight?: TextStyle['fontWeight'];

  /**
   * Input text color
   * @type ThemeTypographyColor
   * @default 'text.primary'
   */
  textColor?: ThemeTypographyColor;

  /**
   * Gutter bottom
   * @type boolean | number
   * @default undefined
   */
  gutterBottom?: boolean | number;
}
