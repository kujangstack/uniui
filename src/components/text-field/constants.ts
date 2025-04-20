import { TextStyle } from 'react-native';
import { ThemeSpacing, ThemeTypographyColor } from '../../theme';
import { TextFieldSize, TextFieldVariant } from './types';

export const DEFAULT_TEXT_FIELD_GUTTER_BOTTOM: ThemeSpacing | undefined =
  undefined;
export const DEFAULT_TEXT_FIELD_TEXT_COLOR: ThemeTypographyColor =
  'text.primary';
export const DEFAULT_TEXT_FIELD_VARIANT: TextFieldVariant = 'outlined';
export const DEFAULT_TEXT_FIELD_SIZE: TextFieldSize = 'medium';
export const DEFAULT_TEXT_FIELD_FONT_WEIGHT: TextStyle['fontWeight'] = 'normal';
