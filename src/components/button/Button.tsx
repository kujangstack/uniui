import { memo, useMemo } from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';

// unistyles
import { useStyles } from 'react-native-unistyles';

// interfaces
import { ButtonProps } from './types';

// constants
import {
  DEFAULT_COLOR,
  DEFAULT_VARIANT,
  DEFAULT_ACCESSIBLE,
  DEFAULT_ACCESSIBILITY_ROLE,
  DEFAULT_ACCESSIBILITY_LABEL,
  DEFAULT_ACCESSIBILITY_HINT,
  DEFAULT_SIZE,
  DEFAULT_ROUNDED,
  DEFAULT_BORDER_WIDTH,
} from './constants';

// styles
import {
  buttonStylesheet,
  buttonTextStylesheet,
  pressedButtonStylesheet,
} from './styles';

// components
import Typography from '@/components/typography/Typography';

const Button = ({
  title,
  style: _style,
  textStyle: _textStyle,
  color = DEFAULT_COLOR,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  rounded = DEFAULT_ROUNDED,
  borderWidth = DEFAULT_BORDER_WIDTH,
  accessible: _providedAccessible = DEFAULT_ACCESSIBLE,
  accessibilityRole: _providedAccessibilityRole = DEFAULT_ACCESSIBILITY_ROLE,
  accessibilityLabel: _providedAccessibilityLabel = DEFAULT_ACCESSIBILITY_LABEL,
  accessibilityHint: _providedAccessibilityHint = DEFAULT_ACCESSIBILITY_HINT,
  ...rest
}: ButtonProps) => {
  // root button styles
  const { styles: _rootStyles } = useStyles(buttonStylesheet, {
    color,
    variant,
    size,
  });

  // pressed button styles
  const { styles: _pressedStyles } = useStyles(pressedButtonStylesheet, {
    color,
    variant,
  });

  // button text styles
  const { styles: _textStyles } = useStyles(buttonTextStylesheet, {
    color,
    variant,
    size,
  });

  const rootStyles = useMemo(
    () => [
      _rootStyles.extraStyles(variant, color, rounded, borderWidth),
      _rootStyles.root,
      _style,
    ],
    [_rootStyles, variant, color, rounded, borderWidth, _style]
  );

  const pressedStyles = useMemo(
    () => [_pressedStyles.extraStyles(variant, color), _pressedStyles.root],
    [_pressedStyles, variant, color]
  );

  const textStyles = useMemo(
    () => [
      _textStyles.root,
      _textStyles.extraStyles(color, variant),
      ...[Array.isArray(_textStyle) ? _textStyle : [_textStyle]],
    ],
    [_textStyle, _textStyles, color, variant]
  );

  return (
    <Pressable
      style={({ pressed }) =>
        [...rootStyles, ...[pressed && pressedStyles]] as StyleProp<ViewStyle>
      }
      {...rest}
    >
      <Typography style={textStyles}>{title}</Typography>
    </Pressable>
  );
};

export default memo(Button);
