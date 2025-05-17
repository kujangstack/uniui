import { memo, useMemo } from 'react';
import { Text } from 'react-native';

// interfaces
import { TypographyProps } from './types';

// constants
import {
  DEFAULT_TYPOGRAPHY_GUTTER_BOTTOM,
  DEFAULT_TYPOGRAPHY_COLOR,
  DEFAULT_TYPOGRAPHY_VARIANT,
  DEFAULT_TYPOGRAPHY_FONT_WEIGHT,
} from './constants';

// utils
import { theme_utils } from '../../theme';

// styles
import { styles } from './styles';

const UniUITypography = ({
  style,
  children,
  color = DEFAULT_TYPOGRAPHY_COLOR,
  variant = DEFAULT_TYPOGRAPHY_VARIANT,
  fontWeight = DEFAULT_TYPOGRAPHY_FONT_WEIGHT,
  gutterBottom: _gutterBottom = DEFAULT_TYPOGRAPHY_GUTTER_BOTTOM,
  ...rest
}: TypographyProps) => {
  styles.useVariants({
    color,
    variant,
    fontWeight,
  });

  const baseTextStyles = useMemo(
    () => [styles.baseText, ...[Array.isArray(style) ? style : [style]]],
    [style]
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
    <Text {...rest} style={[baseTextStyles, { marginBottom: gutterBottom }]}>
      {children}
    </Text>
  );
};

const Typography = memo(UniUITypography);
Typography.displayName = 'Typography';

export default Typography;
