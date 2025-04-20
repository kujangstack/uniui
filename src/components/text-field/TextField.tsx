import { memo, useMemo } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

// unistyles
import { useStyles } from 'react-native-unistyles';

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
import { stylesheet } from './styles';

// utils
import { theme_utils } from '../../theme';

const TextFieldComponent = ({
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
  const { styles } = useStyles(stylesheet, {
    textColor,
    variant,
    size,
    // @ts-ignore
    fontWeight,
  });

  // root styles
  const rootStyles = useMemo(
    () => [styles.root, ...[Array.isArray(style) ? style : [style]]],
    [style, styles.root]
  );

  // input styles
  const inputStyles = useMemo(
    () => [
      styles.input,
      ...[Array.isArray(inputStyle) ? inputStyle : [inputStyle]],
    ],
    [inputStyle, styles.input]
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
    <View
      style={StyleSheet.flatten([rootStyles, { marginBottom: gutterBottom }])}
    >
      <TextInput {...rest} style={StyleSheet.flatten([inputStyles])}>
        {children}
      </TextInput>
    </View>
  );
};

const TextField = memo(TextFieldComponent);
TextField.displayName = 'TextField';

export default TextField;
