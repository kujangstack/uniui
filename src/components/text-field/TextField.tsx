import { memo, useMemo } from 'react';
import { TextInput, View } from 'react-native';

// interfaces
import { TextFieldProps } from './types';

// constants
import {
  DEFAULT_TEXT_FIELD_GUTTER_BOTTOM,
  DEFAULT_TEXT_FIELD_TEXT_COLOR,
  DEFAULT_TEXT_FIELD_VARIANT,
  DEFAULT_TEXT_FIELD_FONT_WEIGHT,
  DEFAULT_TEXT_FIELD_SIZE,
} from './constants';

// styles
import { styles } from './styles';

// utils
import { theme_utils } from '../../theme';

const UniUITextField = ({
  style,
  inputStyle,
  children,
  textColor = DEFAULT_TEXT_FIELD_TEXT_COLOR,
  variant = DEFAULT_TEXT_FIELD_VARIANT,
  fontWeight = DEFAULT_TEXT_FIELD_FONT_WEIGHT,
  size = DEFAULT_TEXT_FIELD_SIZE,
  gutterBottom: _gutterBottom = DEFAULT_TEXT_FIELD_GUTTER_BOTTOM,
  ...rest
}: TextFieldProps) => {
  // styles
  styles.useVariants({
    textColor,
    variant,
    size,
    fontWeight,
  });

  // base styles
  const baseStyles = useMemo(
    () => [styles.root, ...[Array.isArray(style) ? style : [style]]],
    [style]
  );

  // input styles
  const inputStyles = useMemo(
    () => [
      styles.input,
      ...[Array.isArray(inputStyle) ? inputStyle : [inputStyle]],
    ],
    [inputStyle]
  );

  const gutterBottom = useMemo<number>(() => {
    if (typeof _gutterBottom === 'boolean') {
      return theme_utils.createSpacing(1);
    }
    return typeof _gutterBottom === 'number'
      ? theme_utils.createSpacing(_gutterBottom)
      : 0;
  }, [_gutterBottom]);

  return (
    <View style={[baseStyles, { marginBottom: gutterBottom }]}>
      <TextInput {...rest} style={[inputStyles]}>
        {children}
      </TextInput>
    </View>
  );
};

const TextField = memo(UniUITextField);
TextField.displayName = 'TextField';

export default TextField;
