import { memo, useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';

// unistyles
import { useStyles } from 'react-native-unistyles';

// interfaces
import { TypographyProps } from './types';

// constants
import {
  DEFAULT_TYPOGRAPHY_GUTTER_BOTTOM,
  DEFAULT_TYPOGRAPHY_COLOR,
  DEFAULT_TYPOGRAPHY_VARIANT,
  DEFAULT_TYPOGRAPHY_FONT_WEIGHT,
} from './constants';

// styles
import { stylesheet } from './styles';

// utils
import { theme_utils } from '../../theme';

const Typography = ({
  style,
  children,
  color = DEFAULT_TYPOGRAPHY_COLOR,
  variant = DEFAULT_TYPOGRAPHY_VARIANT,
  fontWeight = DEFAULT_TYPOGRAPHY_FONT_WEIGHT,
  gutterBottom: _gutterBottom = DEFAULT_TYPOGRAPHY_GUTTER_BOTTOM,
  ...rest
}: TypographyProps) => {
  // styles
  const { styles } = useStyles(stylesheet, {
    color,
    variant,
    // @ts-ignore
    fontWeight,
  });
  const rootStyles = useMemo(
    () => [styles.root, ...[Array.isArray(style) ? style : [style]]],
    [style, styles.root]
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
    <Text
      {...rest}
      style={StyleSheet.flatten([rootStyles, { marginBottom: gutterBottom }])}
    >
      {children}
    </Text>
  );
};

export default memo(Typography);
