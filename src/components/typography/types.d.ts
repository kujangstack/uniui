import { TextProps, TextStyle } from 'react-native';
import { ThemeTypographyVariant, ThemeTypographyColor } from '../../theme';

export interface TypographyProps extends TextProps {
  /**
   * Typography variant.
   * @type ThemeTypographyVariant
   * @default 'body'
   */
  variant?: ThemeTypographyVariant;

  /**
   * Font weight.
   * @type TextStyle['fontWeight']
   * @default 'normal'
   */
  fontWeight?: TextStyle['fontWeight'];

  /**
   * Text color.
   * @type ThemeTypographyColor
   * @default 'text.primary'
   */
  color?: ThemeTypographyColor;

  /**
   * Gutter bottom.
   * @type boolean | number
   * @default undefined
   */
  gutterBottom?: boolean | number;
}
